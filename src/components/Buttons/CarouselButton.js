import classNames from "classnames";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function CarouselButton({
  isLeft = false,
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex aspect-square h-[44px] w-[44px] items-center justify-center rounded-full border text-3xl font-light transition-colors",
        {
          "border-gray-300 text-gray-300 dark:border-cod-gray-800 dark:text-cod-gray-800":
            disabled,
          "border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-cod-gray-800":
            !disabled,
        }
      )}
    >
      {isLeft ? (
        <CaretLeft weight="light" size={24} />
      ) : (
        <CaretRight weight="light" size={24} />
      )}
    </button>
  );
}
