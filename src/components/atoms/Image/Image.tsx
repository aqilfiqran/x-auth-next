'use client';

import NextImage from 'next/image';
import { MouseEvent, memo, useEffect, useState } from 'react';

type Props = {
  setKey?: string;
  id?: string;
  src?: string;
  srcWebp?: string;
  fallbackSrc?: string;
  width?: string;
  height?: string;
  alt: string;
  loading?: 'eager' | 'lazy' | '';
  ratio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  className?: string;
  priority?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  useWebp?: boolean;
  sizes?: string;
  quality?: number;
};

const imagePlaceholder = '/images/image-placeholder.webp';

export function Image({
  setKey,
  id = '',
  src = imagePlaceholder,
  srcWebp = '',
  fallbackSrc = imagePlaceholder,
  width,
  height,
  alt,
  loading = 'lazy',
  ratio = '5/3',
  objectFit = 'cover',
  className = '',
  priority = false,
  onClick,
  useWebp = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
}: Props) {
  const [webpError, setWebpError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const webpSrc = srcWebp || (useWebp && src && !src.endsWith('.webp') ? `${src}.webp` : src) || imagePlaceholder;

  const idValue = id ? `image-${id}` : '';
  const keyElm = `image-${setKey || Math.floor(Math.random() * 1000)}-${webpSrc}`;

  // const imageLoader: ImageLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`;

  return (
    <div
      key={`wrapper-${keyElm}`}
      style={{ aspectRatio: ratio, width, minWidth: width, height }}
      className={`relative ${className}`}
      onClick={onClick}
    >
      <NextImage
        fill
        key={webpError ? `origin-${keyElm}` : `webp-${keyElm}`}
        id={idValue}
        data-testid={idValue}
        alt={alt}
        src={webpError ? imgSrc : webpSrc}
        loading={loading || undefined}
        onError={() => {
          if (webpError) {
            setImgSrc(fallbackSrc);
          } else {
            setWebpError(true);
          }
        }}
        placeholder="blur"
        blurDataURL={imagePlaceholder}
        style={{ objectFit }}
        sizes={sizes}
        priority={priority}
        quality={quality}
        // loader={() =>
        //   imageLoader({
        //     src: webpError ? imgSrc : webpSrc,
        //     width: Number(width?.replace('px', '').replace('%', '')),
        //     quality,
        //   })
        // }
      />
    </div>
  );
}

export const MemoizedImage = memo(Image);
