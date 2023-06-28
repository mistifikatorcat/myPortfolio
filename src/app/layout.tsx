import "normalize.css/normalize.css";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import localfont from "next/font/local";



const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const opensans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-opensans',
});

// const opensans = localfont({
//   variable: '--font-opensans',
//   src: [
//     {
//       path: "../../public/fonts/OpenSans-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

export const metadata = {
  title: "Daniel Evgrafov",
  description: "Full-Stack developer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html
        lang="en"
        className={`${montserrat.variable} ${opensans.variable}`}
      >
        <body>
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
