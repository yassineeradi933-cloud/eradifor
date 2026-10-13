'use client';

import { useParams, useRouter } from 'next/navigation';

export default function MatchDetailPage() {
  const router = useRouter();
  const params = useParams();
  const matchId = params.id;

  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-900 font-sans" dir="rtl">
      {/* هيدر الصفحة */}
      <header className="bg-[#fffcf5] border-b border-slate-200 py-3 px-6 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="font-black text-lg text-slate-800">Eradi Live - تفاصيل اللقاء</div>
        <button 
          onClick={() => router.push('/')}
          className="bg-[#8b3a0f] hover:bg-[#722f0c] text-white px-4 py-1.5 rounded-xl text-xs font-bold transition shadow-sm"
        >
          العودة للمباريات ⟵
        </button>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* لوحة النتيجة الكبرى */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center space-y-4">
          <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            🏆 دوري أبطال أوروبا
          </span>
          
          <div className="flex justify-around items-center text-xl md:text-2xl font-black text-slate-800 py-2">
            <span className="w-1/3 text-left">أرسنال</span>
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-red-600 font-mono text-lg shadow-inner">
              2 - 1
            </div>
            <span className="w-1/3 text-right">ليل</span>
          </div>

          <div className="text-xs text-slate-500 flex justify-center gap-6 pt-2 border-t">
            <span>📺 القناة: beIN Sports 1</span>
            <span>🎙️ المعلق: حفيظ دراجي</span>
          </div>
        </div>

        {/* مساحة البث المباشر (جاهزة لاحقاً لربط اشتراك الـ IPTV) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 text-center space-y-3">
          <div className="text-amber-400 font-bold text-sm">مشغل البث المباشر</div>
          <p className="text-xs text-slate-400">
            هذه المساحة مخصصة لربط بث الـ IPTV أو الفيديو المباشر عند توفر الاشتراك في المستقبل.
          </p>
          <div className="bg-slate-800 border border-slate-700 py-8 rounded-xl text-xs text-slate-500 font-mono">
            [ جاهز لربط مشغل الفيديو لاحقاً ]
          </div>
        </div>

        {/* أحداث المباراة وإحصائياتها */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="font-black text-sm text-slate-800 border-b pb-2">أحداث وإحصائيات المباراة</h3>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
              <span>⚽ هدف لصالح أرسنال (الدقيقة 34)</span>
              <span className="font-bold">1 - 0</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
              <span>⚽ هدف تعديل النتيجة لليل (الدقيقة 52)</span>
              <span className="font-bold">1 - 1</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
              <span>⚽ هدف ثانٍ لأرسنال (الدقيقة 78)</span>
              <span className="font-bold">2 - 1</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}