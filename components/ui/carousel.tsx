"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";
import { NoiseBackground } from "./noise-background";

interface SlideData {
  title: string;
  src?: string;
  bottomDescription?: string;
  buttonText?: string;       // Optional button text
  buttonAction?: () => void; // Optional button action
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const { src, title, bottomDescription, buttonText, buttonAction } = slide;

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-between relative text-center opacity-100 transition-all duration-300 ease-in-out
         w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >

        <div className="absolute top-0 left-0 w-full h-full bg-black/0 rounded-[1%] overflow-hidden">
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

        {/* Title at top */}
        <h2
          className={`absolute left-1/2 -translate-x-1/2 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl w-[90%] max-w-[70vmin]
            text-slate-500 
            top-1`}
        >

          <span className="inline-block rounded-md bg-black/90 backdrop-blur-md px-4 py-1 border-1">
            {title}
          </span>
        </h2>

        {/* Bottom description + button */}
        {bottomDescription && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 w-[90%] max-w-[70vmin]
              bottom-1`} // same as top title
          >
          {buttonText && buttonAction && (
            <button
              onClick={buttonAction}
              className="px-4 py-2 bg-slate-800 text-blue-400 rounded-2xl shadow transition hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              {buttonText}
            </button>
          )}
            <p
              className={`text-center text-sm md:text-base lg:text-lg text-slate-500`}
            >
              <span className="inline-block rounded-md bg-black/90 backdrop-blur-md px-3 py-1 border-1">

                {bottomDescription}
              </span>
            </p>


          </div>
        )}

      </li>
    </div>
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

export default function Carousel({ slides }: CarouselProps) {
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
      className="relative w-[70vmin] max-h-[70vmin] aspect-square mx-auto overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
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

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
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
  );
}
