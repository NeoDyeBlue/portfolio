import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";
import classNames from "classnames";
import { Navbar } from "@/components/Navigation";
import Providers from "@/components/Providers";
import { IconContactLink } from "@/components/Buttons";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFileText,
} from "react-icons/ai";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
import Link from "next/link";

export const metadata = {
  title: "John Paul Zoleta",
  description: "Hi there, I'm John Paul Zoleta, a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={classNames(openSans.variable, raleway.variable)}>
          <main
            className={classNames(
              "relative mx-auto flex flex-col gap-10 p-6 md:flex-row md:gap-20 md:px-12 md:py-0"
            )}
          >
            <div
              className="absolute left-0 top-0 z-[-1] h-screen w-full bg-[url('/gradient.svg')] bg-[length:800px_600px] 
            bg-right-top bg-no-repeat opacity-30 dark:opacity-100"
            ></div>
            <div
              className="top-0 flex w-full max-w-[480px] flex-col gap-4 md:sticky 
              md:h-screen md:justify-between md:py-12"
            >
              <div className="flex flex-col gap-8">
                <Navbar />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col font-display text-6xl font-extrabold uppercase leading-none tracking-tight">
                    <p className="max-w-[40vw] text-cerulean-blue-500 md:whitespace-nowrap">
                      John Paul
                    </p>
                    <p>Zoleta</p>
                  </div>
                  <p className="font-display text-3xl font-bold">
                    Web Developer
                  </p>
                </div>
              </div>
              <ul className="hidden flex-col gap-4 uppercase md:flex">
                <li className="w-fit">
                  <Link href={"#about"} className="w-fit hover:underline">
                    <p>About</p>
                  </Link>
                </li>
                <li className="w-fit">
                  <Link href={"#works"} className="w-fit hover:underline">
                    <p>Works</p>
                  </Link>
                </li>
                <li className="w-fit">
                  <Link href={"#contact"} className="w-fit hover:underline">
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
              <div
                className="mt-10 flex h-[44px] w-fit items-center gap-6
              rounded-full bg-black px-6 text-white dark:bg-white dark:text-black"
              >
                <IconContactLink
                  link="https://facebook.com/neodyeblue"
                  icon={<AiFillFacebook size={20} />}
                />
                <IconContactLink
                  link="https://github.com/neodyeblue"
                  icon={<AiFillGithub size={20} />}
                />
                <IconContactLink
                  link="https://www.linkedin.com/in/john-paul-zoleta-63a476261/"
                  icon={<AiFillLinkedin size={20} />}
                />
                <IconContactLink
                  link="mailto:jhnplzoleta@gmail.com"
                  icon={<AiFillMail size={20} />}
                />
                <IconContactLink
                  link="John_Paul_Zoleta-Resume.pdf"
                  icon={<AiFillFileText size={20} />}
                />
              </div>
            </div>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
