import { Inter } from "next/font/google";
import "/src/resources/globals.css";
import common from "/src/resources/common.module.css";
import Side from "/src/app/framework/Side";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "어디요",
  description: "재래시장 배달 서비스 '어디요'",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={[inter.className, common.container].join(' ')}>
            <Side></Side>
              <main className={common.content}>
                {children}
              </main>
          </body>
      </html>
  );
}