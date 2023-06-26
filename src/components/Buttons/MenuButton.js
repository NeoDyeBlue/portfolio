import classNames from "classnames";

export default function MenuButton({ isOpen = false, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="relative -mr-1 flex h-[32px] w-[32px] flex-col items-center justify-center gap-[0.35rem]"
    >
      <div
        className={classNames(
          "h-[2px] w-[20px] origin-left rounded-full bg-white transition-transform dark:bg-ship-gray-950",
          {
            "rotate-[52deg]": isOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          "h-[2px] w-[20px] origin-left rounded-full bg-white transition-opacity dark:bg-ship-gray-950",
          {
            "opacity-0": isOpen,
          }
        )}
      ></div>
      <div
        className={classNames(
          "h-[2px] w-[20px] origin-left rounded-full bg-white transition-transform dark:bg-ship-gray-950",
          {
            "-rotate-[52deg]": isOpen,
          }
        )}
      ></div>
    </button>
  );
}
