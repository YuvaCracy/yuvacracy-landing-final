import { montserrat, openSans } from "../public/font.js"
import "./globals.css";


export const metadata = {
  title: "Yucacracy",
  description: "Youth Led organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>{children}</body>
    </html>
  );
}
