import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFileText,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-between gap-4 bg-white p-6 dark:bg-black">
        <div className="flex h-full flex-col gap-2 text-left">
          <p className="text-3xl uppercase">Hi, I&apos;m</p>
          <div className="font-display text-clamp uppercase leading-none">
            <p className="text-cerulean-blue-500">John Paul</p>
            <p className="text-black dark:text-white">Zoleta</p>
          </div>
        </div>
        <div className="flex w-fit flex-col items-start gap-3 self-end lg:flex-row lg:items-center">
          <p className="font-bold uppercase">Web Developer</p>
          <div className="h-[1px] w-full bg-black dark:bg-white lg:h-[44px] lg:w-[1px]" />
          <div
            className="flex h-[44px] w-fit items-center gap-6 rounded-full
         bg-black px-6 text-white dark:bg-white dark:text-black"
          >
            <AiFillFacebook size={20} />
            <AiFillGithub size={20} />
            <AiFillLinkedin size={20} />
            <AiFillMail size={20} />
            <AiFillFileText size={20} />
          </div>
        </div>
      </div>
      <div className="flex min-h-[200px] w-full items-center border-y border-black bg-white px-6 dark:border-white dark:bg-black">
        {/* <p className="text-6xl font-bold text-black">
          Ready to face new challenges!
        </p> */}
      </div>
    </div>
  );
}
