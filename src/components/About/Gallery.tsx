"use client";
import Image from "next/image";
import css from "./Gallery.module.css";
import { useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 1",
  },
  {
    id: 2,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 2",
  },
  {
    id: 3,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 3",
  },
  {
    id: 4,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 4",
  },
  {
    id: 5,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 3",
  },
  {
    id: 6,
    imageUrl: "/images/lessons-image.png",
    altText: "Gallery Image 4",
  },
];

export default function Gallery() {
  const galleryRef = useRef<HTMLUListElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const firstItem = gallery.querySelector("li");

    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = 12;

    gallery.scrollBy({
      left: direction === "left" ? -(itemWidth + gap) : itemWidth + gap,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const firstItem = gallery.querySelector("li");

    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = 12;

    const index = Math.round(gallery.scrollLeft / (itemWidth + gap));

    setActiveSlide(index);
  };

  const scrollToSlide = (index: number) => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const firstItem = gallery.querySelector("li");

    if (!firstItem) return;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = 12;

    gallery.scrollTo({
      left: index * (itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className={css.gallerySection}>
      <div className="container">
        <div className={css.header}>
          <h1 className={css.title}>Gallery</h1>
          <p className={css.text}>Moments & performances</p>
          <div className={css.controls}>
            <button
              type="button"
              className={css.arrowBtn}
              onClick={() => scrollGallery("left")}
              aria-label="Previous images"
            >
              ‹
            </button>
            <button
              type="button"
              className={css.arrowBtn}
              onClick={() => scrollGallery("right")}
              aria-label="Next images"
            >
              ›
            </button>
          </div>
        </div>
        <ul
          ref={galleryRef}
          className={css.galleryList}
          onScroll={handleScroll}
        >
          {galleryItems.map((item) => (
            <li key={item.id} className={css.galleryItem}>
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={350}
                height={300}
                className={css.galleryImage}
              />
            </li>
          ))}
        </ul>

        <div className={css.dots}>
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={() => scrollToSlide(index)}
              className={`${css.dot} ${
                activeSlide === index ? css.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
