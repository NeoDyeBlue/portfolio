"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { RemoveScroll } from "react-remove-scroll";
import classNames from "classnames";
import { useRef, useEffect, useState } from "react";

function Indicator(
  clickHandler = () => {},
  isSelected = false,
  index = 0,
  label = ""
) {
  return (
    <div
      onClick={clickHandler}
      className={classNames(
        "mr-[8px] inline-block h-[10px] w-[10px] cursor-pointer rounded-full border",
        {
          "border-black bg-black": isSelected,
          "border-gray-400 bg-white": !isSelected,
        }
      )}
    ></div>
  );
}

function Item(item = <></>, options = { isSelected: false }) {
  return (
    <div
      className={classNames("h-full w-full transition-opacity duration-300", {
        "opacity-1": options.isSelected,
        "opacity-0": !options.isSelected,
      })}
    >
      {item}
    </div>
  );
}

export default function ImageCarousel({
  images = [],
  onClose = () => {},
  title = "",
}) {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    updateContainerHeight(); // Initial height calculation

    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  const updateContainerHeight = () => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  };

  function next() {
    setSelectedItem((current) => current + 1);
  }

  function prev() {
    setSelectedItem((current) => current - 1);
  }

  const carouselImages = images.map((image, index) => (
    <div
      key={index}
      className={classNames(
        "relative flex items-center justify-center overflow-hidden"
      )}
      style={{ height: `${containerHeight}px` }}
    >
      <div className="h-full overflow-hidden rounded-[20px] border border-gray-300 dark:border-gray-800">
        <Image
          src={image}
          alt="project image"
          width={1500}
          height={1500}
          className="h-auto max-h-full w-auto max-w-full"
          // placeholder="blur"
          //   fill
        />
      </div>
    </div>
  ));

  const normalImages = images.map((image, index) => (
    <div
      key={index}
      className={classNames(
        "relative flex overflow-hidden rounded-[20px] border border-gray-300 dark:border-gray-800"
      )}
    >
      <div className="h-full w-full overflow-hidden">
        <Image
          src={image}
          alt="project image"
          width={1500}
          height={1500}
          className="h-auto w-full"
          // placeholder="blur"
          //   fill
        />
      </div>
    </div>
  ));

  return (
    <RemoveScroll>
      <div className="fixed left-0 top-0 z-[100] flex h-full max-h-screen w-full flex-col gap-6 overflow-y-auto bg-white p-6 dark:bg-black md:p-12">
        <div className="flex gap-6 dark:text-white">
          <p className="w-full overflow-hidden font-display text-xl font-bold sm:text-ellipsis sm:text-2xl">
            {title}
          </p>
          <div className="ml-auto flex items-center gap-4 self-start">
            <p className="hidden whitespace-nowrap text-xl lg:block">
              {selectedItem + 1} of {images.length}
            </p>
            <button className="self-end" onClick={onClose}>
              <X weight="light" size={32} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:hidden">{normalImages}</div>
        <div
          className="hidden h-full w-full items-center gap-6 lg:flex"
          ref={containerRef}
        >
          <button
            onClick={prev}
            disabled={selectedItem == 0}
            className="text-6xl font-light text-gray-500 transition-colors 
            hover:text-black disabled:text-gray-200 dark:text-gray-600 dark:hover:text-white disabled:dark:text-gray-800"
          >
            {"<"}
          </button>
          <Carousel
            selectedItem={selectedItem}
            className="h-full w-full"
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            renderIndicator={Indicator}
            renderItem={Item}
            onChange={(index) => setSelectedItem(index)}
            transitionTime={300}
            //   renderItem={Slide}
          >
            {carouselImages}
          </Carousel>
          <button
            onClick={next}
            disabled={selectedItem == images.length - 1}
            className="text-6xl font-light text-gray-500 transition-colors 
            hover:text-black disabled:text-gray-200 dark:text-gray-600 dark:hover:text-white disabled:dark:text-gray-800"
          >
            {">"}
          </button>
        </div>
      </div>
    </RemoveScroll>
  );
}
