import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";
import classNames from "classnames";
import { Navbar } from "@/components/Navigation";
import Providers from "@/components/Providers";
import { IconContactLink } from "@/components/Buttons";
// import {
//   AiFillFacebook,
//   AiFillLinkedin,
//   AiFillGithub,
//   AiFillMail,
//   AiFillFileText,
// } from "react-icons/ai";
import {
  PiFacebookLogoLight,
  PiFacebookLogoFill,
  PiGithubLogoLight,
  PiGithubLogoFill,
  PiLinkedinLogoLight,
  PiLinkedinLogoFill,
  PiEnvelopeLight,
  PiEnvelopeFill,
  PiFilePdfLight,
  PiFilePdfFill,
} from "react-icons/pi";
import links from "@/lib/contact-links";
import HeroText from "@/components/HeroText";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  // display: "swap",
});
import Link from "next/link";

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
              "relative mx-auto flex flex-col gap-10 p-6 md:pb-0 lg:flex-row lg:gap-20 lg:px-12 lg:py-0"
            )}
          >
            {/* <div
              className="absolute left-0 top-0 z-[-1] h-screen w-full bg-[url('/gradient.svg')] bg-[length:800px_600px] 
            bg-right-top bg-no-repeat opacity-50 dark:opacity-100"
            ></div> */}
            <Navbar />
            <div
              className="relative top-0 flex w-full flex-col gap-4 lg:sticky lg:h-screen 
              lg:max-w-[480px] lg:justify-between lg:py-12"
            >
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
              <div
                className="mt-10 flex h-[44px] w-fit items-center gap-6
              rounded-full md:absolute md:bottom-0 md:right-0 lg:relative"
              >
                <IconContactLink
                  link={links.facebook}
                  icon={<PiFacebookLogoLight size={28} />}
                  fillIcon={<PiFacebookLogoFill size={28} />}
                />
                <IconContactLink
                  link={links.github}
                  icon={<PiGithubLogoLight size={28} />}
                  fillIcon={<PiGithubLogoFill size={28} />}
                />
                <IconContactLink
                  link={links.linkedin}
                  icon={<PiLinkedinLogoLight size={28} />}
                  fillIcon={<PiLinkedinLogoFill size={28} />}
                />
                <IconContactLink
                  link={links.email}
                  icon={<PiEnvelopeLight size={28} />}
                  fillIcon={<PiEnvelopeFill size={28} />}
                />
                <IconContactLink
                  link={links.resume}
                  icon={<PiFilePdfLight size={28} />}
                  fillIcon={<PiFilePdfFill size={28} />}
                />
              </div>
            </div>
            <hr className="border-black dark:border-white lg:hidden"></hr>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
