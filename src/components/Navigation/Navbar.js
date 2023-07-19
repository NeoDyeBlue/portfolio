"use client";

import { ThemeToggle, MenuButton } from "../Buttons";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleMenuClick() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-end gap-10 p-6 lg:p-12">
      <button
        className={classNames(
          `relative z-10 flex w-fit flex-col items-center
           rounded-full border border-black bg-white p-2
        text-black dark:border-white dark:bg-black dark:text-white`
        )}
      >
        <div className="flex items-center gap-2">
          {isClient ? (
            <div className="lg:hidden">
              <MenuButton isOpen={isMenuOpen} onClick={handleMenuClick} />
            </div>
          ) : null}
          <div className="h-[32px] w-[1px] bg-black dark:bg-white md:hidden" />
          <ThemeToggle />
        </div>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              // ease: "linear",
              type: "spring",
              bounce: 0,
              // duration: 2,
            }}
            className="fixed left-0 top-0 w-full rounded-b-[20px] bg-black p-6 dark:bg-white lg:hidden"
          >
            <p className="flex h-[48px] items-center font-display text-3xl font-bold text-white dark:text-black">
              Menu
            </p>
            <ul
              // ref={scope}
              onClick={() => setIsMenuOpen(false)}
              className={classNames(
                `flex w-full flex-col items-center gap-6
                pt-6 text-white dark:text-black`
              )}
            >
              <MenuItem text="About" link="#about" />
              <MenuItem text="Works" link="#works" />
              <MenuItem text="Contact" link="#contact" />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
