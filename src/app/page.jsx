'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('today');

  const yesterdayMatches = [
    {
      id: "yest-1",
      homeTeam: "النصر",
      homeLogo: "https://media.api-sports.io/football/teams/2934.png",
      awayTeam: "نيفتشي فرغانة",
      awayLogo: "https://media.api-sports.io/football/teams/4890.png",
      score: "3 - 1",
      status: "انتهت",
    },
    {
      id: "yest-2",
      homeTeam: "كوفنتري سيتي",
      homeLogo: "https://media.api-sports.io/football/teams/34.png",
      awayTeam: "نيوكاسل يونايتد",
      awayLogo: "https://media.api-sports.io/football/teams/34.png",
      score: "4 - 1",
      status: "انتهت",
    },
    {
      id: "yest-3",
      homeTeam: "ليفانتي",
      homeLogo: "https://media.api-sports.io/football/teams/538.png",
      awayTeam: "إشبيلية",
      awayLogo: "https://media.api-sports.io/football/teams/536.png",
      score: "3 - 3",
      status: "انتهت",
    },
    {
      id: "yest-4",
      homeTeam: "حسنية أكادير",
      homeLogo: "https://media.api-sports.io/football/teams/3547.png",
      awayTeam: "الجيش الملكي",
      awayLogo: "https://media.api-sports.io/football/teams/1389.png",
      score: "2 - 2",
      status: "انتهت",
    },
  ];

  const todayMatches = [
    {
      id: "atletico-mancity",
      homeTeam: "أتلتيكو مدريد",
      homeLogo: "https://media.api-sports.io/football/teams/530.png",
      awayTeam: "مانشستر يونايتد",
      awayLogo: "https://media.api-sports.io/football/teams/33.png",
      time: "PM 7:00",
      status: "جارية الآن",
      isLive: true,
    },
    {
      id: "inter-brugge",
      homeTeam: "إنتر ميلان",
      homeLogo: "https://media.api-sports.io/football/teams/505.png",
      awayTeam: "كلوب بروج",
      awayLogo: "https://media.api-sports.io/football/teams/569.png",
      time: "PM 7:00",
      status: "لم تبدأ بعد",
      isLive: false,
    },
    {
      id: "leipzig-psv",
      homeTeam: "لايبزيج",
      homeLogo: "https://media.api-sports.io/football/teams/1736.png",
      awayTeam: "آيندهوفن",
      awayLogo: "https://media.api-sports.io/football/teams/682.png",
      time: "PM 7:00",
      status: "لم تبدأ بعد",
      isLive: false,
    },
    {
      id: "galatasaray-barca",
      homeTeam: "غلطة سراي",
      homeLogo: "https://media.api-sports.io/football/teams/645.png",
      awayTeam: "برشلونة",
      awayLogo: "https://media.api-sports.io/football/teams/529.png",
      time: "PM 7:00",
      status: "لم تبدأ بعد",
      isLive: false,
    },
  ];

  const tomorrowMatches = [
    {
      id: "tom-1",
      homeTeam: "بودو جليمت",
      homeLogo: "https://media.api-sports.io/football/teams/487.png",
      awayTeam: "بوروسيا دورتموند",
      awayLogo: "https://media.api-sports.io/football/teams/165.png",
      time: "22:00",
      status: "لم تبدأ بعد",
    },
    {
      id: "tom-2",
      homeTeam: "شاختار دونيتسك",
      homeLogo: "https://media.api-sports.io/football/teams/561.png",
      awayTeam: "أيك أثينا",
      awayLogo: "https://media.api-sports.io/football/teams/553.png",
      time: "22:00",
      status: "لم تبدأ بعد",
    },
    {
      id: "tom-3",
      homeTeam: "مانشستر سيتي",
      homeLogo: "https://media.api-sports.io/football/teams/50.png",
      awayTeam: "باريس سان جيرمان",
      awayLogo: "https://media.api-sports.io/football/teams/85.png",
      time: "22:00",
      status: "لم تبدأ بعد",
    },
    {
      id: "tom-4",
      homeTeam: "روما",
      homeLogo: "https://media.api-sports.io/football/teams/497.png",
      awayTeam: "ريال مدريد",
      awayLogo: "https://media.api-sports.io/football/teams/541.png",
      time: "22:00",
      status: "لم تبدأ بعد",
    },
    {
      id: "tom-5",
      homeTeam: "أستون فيلا",
      homeLogo: "https://media.api-sports.io/football/teams/66.png",
      awayTeam: "فنربخشة",
      awayLogo: "https://media.api-sports.io/football/teams/607.png",
      time: "22:00",
      status: "لم تبدأ بعد",
    },
  ];

  const currentMatches = 
    activeTab === 'yesterday' ? yesterdayMatches : 
    activeTab === 'tomorrow' ? tomorrowMatches : todayMatches;

  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-900 font-sans" dir="rtl">
      <header className="bg-white shadow-sm py-4 px-6 mb-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-purple-700 transition">الرئيسية</Link>
            <Link href="/stream" className="hover:text-purple-700 transition">المباريات مباشرة</Link>
            <a href="#matches" className="hover:text-purple-700 transition">جدول المباريات</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">تابعنا:</span>
            
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="فيسبوك" className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" title="يوتيوب" className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            <a href="https://wa.me/212615861042" target="_blank" rel="noreferrer" title="واتساب" className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
          </div>

          <div className="bg-purple-900 text-white px-4 py-2 rounded-xl text-center font-bold shadow-md">
            Eradifor TV
            <span className="block text-[10px] font-normal text-purple-200">eradifor.com</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-purple-900 text-white rounded-2xl p-6 text-center shadow-lg space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-yellow-300">
            شاهد أقوى المباريات المباشرة وحصرياً - لا تفوت أي لحظة
          </h1>
          <div className="flex justify-center items-center gap-6 text-xs md:text-sm flex-wrap">
            <span>🔴 بث مباشر</span>
            <span>🚫 بدون إعلانات</span>
            <span>🔔 إشعارات الأهداف</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 my-4">
          <button 
            onClick={() => setActiveTab('yesterday')}
            className={`px-5 py-2 rounded-xl shadow-sm text-sm font-medium transition ${activeTab === 'yesterday' ? 'bg-purple-900 text-white' : 'bg-white text-slate-700 hover:bg-purple-50'}`}
          >
            الأمس
          </button>
          <button 
            onClick={() => setActiveTab('today')}
            className={`px-6 py-2 rounded-xl shadow-sm text-sm font-medium transition ${activeTab === 'today' ? 'bg-purple-900 text-white' : 'bg-white text-slate-700 hover:bg-purple-50'}`}
          >
            اليوم
          </button>
          <button 
            onClick={() => setActiveTab('tomorrow')}
            className={`px-5 py-2 rounded-xl shadow-sm text-sm font-medium transition ${activeTab === 'tomorrow' ? 'bg-purple-900 text-white' : 'bg-white text-slate-700 hover:bg-purple-50'}`}
          >
            الغد
          </button>
        </div>

        <div className="flex justify-end" id="matches">
          <span className="bg-purple-900 text-white px-4 py-1.5 rounded-xl text-sm font-bold shadow-sm">
            {activeTab === 'yesterday' ? 'نتائج مباريات الأمس' : activeTab === 'tomorrow' ? 'مباريات الغد (دوري أبطال أوروبا)' : 'جدول مباريات اليوم'}
          </span>
        </div>

        <div className="space-y-4">
          {currentMatches.map((match) => (
            <Link
              key={match.id}
              href="/stream"
              className="block bg-white rounded-2xl p-4 shadow-sm border-r-8 border-purple-900 flex justify-between items-center transition hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3 w-1/3">
                <img src={match.homeLogo} alt={match.homeTeam} className="w-10 h-10 object-contain" />
                <span className="font-bold text-base md:text-lg text-slate-800">{match.homeTeam}</span>
              </div>

              <div className="flex flex-col items-center gap-1 w-1/3">
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md text-sm font-black tracking-wider">
                  {match.score || match.time}
                </span>
                <span className={`px-3 py-0.5 rounded text-[10px] font-bold ${match.isLive ? 'bg-red-600 text-white animate-pulse' : 'bg-purple-900 text-white'}`}>
                  {match.status}
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 w-1/3">
                <span className="font-bold text-base md:text-lg text-slate-800">{match.awayTeam}</span>
                <img src={match.awayLogo} alt={match.awayTeam} className="w-10 h-10 object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
