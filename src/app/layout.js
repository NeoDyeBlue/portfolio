import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";
import classNames from "classnames";
import { Navbar } from "@/components/Navigation";
import Providers from "@/components/Providers";
import HeroText from "@/components/HeroText";
import IconContactLinks from "@/components/Navigation/IconContactLinks";

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
import Logo from "@/components/Logo";

export const metadata = {
  title: "John Paul Zoleta | Web Developer",
  description: "Hi there, I'm John Paul Zoleta, a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={classNames(openSans.variable, raleway.variable)}>
          <main
            className={classNames(
              "relative mx-auto flex flex-col gap-10 p-6 md:pb-0 lg:flex-row lg:gap-12 lg:px-12 lg:py-0"
            )}
          >
            {/* <div
              className="absolute left-0 top-0 z-[-1] h-screen w-full bg-[url('/gradient.svg')] bg-[length:800px_600px] 
            bg-right-top bg-no-repeat opacity-50 dark:opacity-100"
            ></div> */}
            <Navbar />
            <div
              className="relative top-0 flex w-full flex-col gap-8 lg:sticky 
              lg:h-screen lg:max-w-[480px] lg:justify-between lg:py-12"
            >
              <Logo />
              <HeroText />
              <ul className="hidden flex-col gap-4 uppercase lg:flex">
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
              <IconContactLinks />
            </div>
            <div className="lg:sticky lg:top-0 lg:h-screen lg:py-12">
              <div className="h-[1px] w-full bg-gray-300 dark:bg-cod-gray-800 lg:h-full lg:w-[1px]" />
            </div>
            {/* <hr className="border-gray-300 dark:border-cod-gray-800"></hr> */}
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
