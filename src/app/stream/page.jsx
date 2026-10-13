"use client";

import Link from "next/link";

export default function StreamPage() {
  // معرف الفيديو من رابط يوتيوب الذي أرسلته
  const youtubeVideoId = "isP-6r2ZazI";

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8" dir="rtl">
      {/* الشريط العلوي */}
      <header className="max-w-5xl mx-auto flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6 shadow-lg">
        <h1 className="text-xl font-bold text-purple-400">Eradifor TV - البث المباشر</h1>
        <Link
          href="/"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          ← العودة للرئيسية
        </Link>
      </header>

      {/* مشغل البث */}
      <section className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-bold text-red-500">مباشر الآن</span>
          </div>
          <h2 className="text-lg font-semibold text-slate-300">مباراة تجريبية (بث مباشر)</h2>
        </div>

        {/* مشغل يوتيوب المدمج والمتجاوب */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner border border-slate-800">
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&rel=0`}
            title="Eradifor Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}