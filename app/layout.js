import { montserrat, openSans } from "../public/font.js"
import Providers from "@/components/Providers/Providers.js";
import "./globals.css";

export const metadata = {
  title: "YuvaCracy",
  description: "Youth Led organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
