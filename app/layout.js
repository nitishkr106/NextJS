import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-12">{children}</body>
    </html>
  );
  //p-12 means body ko padding dena
}
