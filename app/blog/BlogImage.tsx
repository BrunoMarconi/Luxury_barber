import Image from "next/image";

export function BlogImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[400px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[12px] leading-5 tracking-[0.06em] text-black/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
