'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './HoverScrollImage.module.css';

interface HoverScrollImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HoverScrollImage = ({
  src,
  alt,
  width,
  height,
}: HoverScrollImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (containerRef.current && imageRef.current) {
      imageRef.current.style.transition = 'transform 10s ease';
      imageRef.current.style.transform = `translateY(-${
        imageRef.current.height - containerRef.current.clientHeight
      }px)`;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 3s ease';
      imageRef.current.style.transform = 'translateY(0)';
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className={styles.image}
        ref={imageRef}
        // unoptimized // Add this if you want to use the underlying <img> element directly
      />
    </div>
  );
};

export default HoverScrollImage;
