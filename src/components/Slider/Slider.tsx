"use client";
import React, { useEffect, useRef, useState } from "react";

import { SlideItem, SlideItemProps } from "./SlideItem";
import styles from "./Slider.module.css";

interface SliderProps {
  items: SlideItemProps[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    scrollToIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    // リサイズ時に現在スライドを再スクロール
    const onResize = () => scrollToIndex(currentIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentIndex]);

  return (
    <div className={styles.sliderWrapper}>
      <button
        className={styles.navButton}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        ◀
      </button>
      <div ref={containerRef} className={styles.sliderContainer}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.slideWrapper}>
            <SlideItem
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <button
        className={styles.navButton}
        onClick={handleNext}
        aria-label="Next slide"
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
