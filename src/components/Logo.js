import Image from "next/image";

export default function Logo() {
  return (
    // <Image
    //   src={"/logo.svg"}
    //   alt="logo"
    //   height={60}
    //   width={60}
    //   className="h-[60px] w-[60px] overflow-hidden rounded-full border border-black bg-white"
    // />
    <div className="relative flex h-[60px] w-[60px] overflow-hidden bg-black dark:bg-white">
      <p className="absolute -bottom-[15px] -right-[5px] font-display text-6xl text-white dark:text-black">
        JP
      </p>
    </div>
  );
}
