import classNames from "classnames";

export default function MenuButton({ isOpen = false, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="relative -mr-1 flex h-[32px] w-[32px] flex-col items-center justify-center gap-[0.35rem]"
    >
      <div
        className={classNames(
          "h-[1px] w-[20px] origin-center rounded-full bg-black transition-transform dark:bg-white",
          {
            "translate-y-[0.22rem] rotate-[40deg]": isOpen,
          }
        )}
      ></div>
      {/* <div
        className={classNames(
          "h-[1px] w-[20px] origin-left rounded-full bg-black transition-opacity dark:bg-white",
          {
            "opacity-0": isOpen,
          }
        )}
      ></div> */}
      <div
        className={classNames(
          "h-[1px] w-[20px] origin-center rounded-full bg-black transition-transform dark:bg-white",
          {
            "-translate-y-[0.22rem] -rotate-[40deg]": isOpen,
          }
        )}
      ></div>
    </button>
  );
}
