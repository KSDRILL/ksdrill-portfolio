import Image from "next/image";
import { cn } from "@/lib/utils/classNames";

type BackgroundImageProps = {
  className?: string;
  imageDesktop: string;
  imageMobile: string;
  fallback: string;
  alt: string;
  backgroundSize: string;
  backgroundPosition: string;
  overlayColor: string;
  overlayOpacity: number;
  blur?: boolean;
  priority?: boolean;
  children?: React.ReactNode;
};

export default function BackgroundImage(props: BackgroundImageProps) {
  const {
    className,
    imageDesktop,
    imageMobile,
    fallback,
    alt,
    backgroundSize,
    backgroundPosition,
    overlayColor,
    overlayOpacity,
    blur,
    priority,
    children
  } = props;

  const unoptimized =
    /\.svg(\?|$)/i.test(fallback) ||
    /\.svg(\?|$)/i.test(imageDesktop) ||
    /\.svg(\?|$)/i.test(imageMobile);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <picture>
        <source srcSet={imageDesktop} media="(min-width: 768px)" />
        <source srcSet={imageMobile} media="(max-width: 767px)" />
        <Image
          src={fallback}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          unoptimized={unoptimized}
          style={{
            objectFit: backgroundSize as "cover" | "contain",
            objectPosition: backgroundPosition
          }}
        />
      </picture>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          blur ? "backdrop-blur" : ""
        )}
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

