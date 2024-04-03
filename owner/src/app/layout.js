import { Inter } from "next/font/google";
import "@/resources/globals.css";
import Header from "@/app/framework/Header";
import Side from "@/app/framework/Side";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "어디요",
  description: "재래시장 배달 서비스 '어디요'",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Header></Header>
      <Side></Side>
      <main>
        {children}
      </main>
      </body>
      </html>
  );
}