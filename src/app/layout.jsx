import './globals.css';

export const metadata = {
  title: "Eradi TV",
  description: "موقع بث مباشر للمباريات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}