"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, ReactNode } from "react";

interface SlideData {
  title: string;
  src?: string;
  buttonAction?: () => void;
  accordion?: ReactNode;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const { src, title, accordion } = slide;

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  return (
    <li
      ref={slideRef}
      className="flex flex-1 flex-col items-center justify-start relative text-center opacity-100 transition-all duration-300 ease-in-out
         w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
      onClick={() => handleSlideClick(index)}
      style={{
        transform:
          current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div className="flex flex-col w-full h-full">
        {/* Accordion stays above image */}
        {accordion && <div className="mb-2">{accordion}</div>}

        {/* Image container now fills remaining height + accordion height */}
        <div className="relative flex-1 w-full rounded-[1%] overflow-hidden">
          {src && (
            <img
              className="absolute inset-0 w-full h-full object-contain mx-auto my-auto transition-opacity duration-600 ease-in-out"
              alt={title}
              src={src}
              onLoad={imageLoaded}
            />
          )}

          {current === index && (
            <div className="absolute inset-0 transition-all duration-1000 pointer-events-none" />
          )}
        </div>
      </div>
    </li>
  );
};


interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-slate-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-blue-400" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel2({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto mb-10"
      aria-labelledby={`carousel-heading-${id}`}
    >
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>

      {/* Pills + arrows container below the carousel */}
      <div className="absolute w-full flex flex-col items-center top-[calc(100%+1rem)] gap-2 z-20">
        {/* Pills above arrows */}
        <div className="flex gap-2 pt-1 pb-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "bg-blue-300/75 w-6 h-2 sm:w-8 sm:h-3 rounded-full"
                  : "bg-blue-400/50 w-2 h-2 sm:w-3 sm:h-3 rounded-full hover:-translate-y-0.5 transition-all duration-300"
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}
