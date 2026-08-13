"use client";
import Image from "next/image";
import css from "./Gallery.module.css";
import { useRef } from "react";

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

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;
  
    if (!gallery) return;
  
    const firstItem = gallery.querySelector("li");
  
    if (!firstItem) return;
  
    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = 5;
  
    gallery.scrollBy({
      left: direction === "left" ? -(itemWidth + gap) : itemWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className={css.gallerySection}>
      <div className="container">
        <div className={css.header}>
          <h1 className={css.title}>Gallery</h1>
          <p className={css.text}>COMING SOON</p>
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
        <ul ref={galleryRef} className={css.galleryList}>
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
      </div>
    </section>
  );
}
