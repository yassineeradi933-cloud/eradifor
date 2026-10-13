// src/app/api/matches/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dateType = searchParams.get('dateType') || 'today';

  const targetDate = new Date();
  if (dateType === 'yesterday') {
    targetDate.setDate(targetDate.getDate() - 1);
  } else if (dateType === 'tomorrow') {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;

  try {
    const res = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard?dates=${dateStr}`,
      { cache: 'no-store' }
    );
    const data = await res.json();

    if (!data.events || data.events.length === 0) {
      return Response.json({ matches: [] });
    }

    const matches = data.events.map((event) => {
      const comp = event.competitions?.[0];
      const homeTeam = comp?.competitors?.find((c) => c.homeAway === 'home')?.team?.displayName || 'المضيف';
      const awayTeam = comp?.competitors?.find((c) => c.homeAway === 'away')?.team?.displayName || 'الضيف';
      const leagueName = event.season?.slug || comp?.league?.name || 'مباراة رسمية';
      
      const statusState = event.status?.type?.state;
      const statusDetail = event.status?.type?.shortDetail || 'لم تبدأ';

      let statusFormatted = 'لم تبدأ بعد';
      if (statusState === 'in') {
        statusFormatted = `🔴 جارية (${statusDetail})`;
      } else if (statusState === 'post') {
        statusFormatted = 'انتهت';
      }

      const matchTime = new Date(event.date).toLocaleTimeString('ar-EG', {
        hour: '2-digit',
        minute: '2-digit',
      });

      return {
        id: event.id,
        home: homeTeam,
        away: awayTeam,
        time: matchTime,
        league: leagueName,
        channel: 'beIN Sports',
        status: statusFormatted,
      };
    });

    return Response.json({ matches });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ matches: [] }, { status: 500 });
  }
}