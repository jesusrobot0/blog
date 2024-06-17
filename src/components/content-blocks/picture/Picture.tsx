import Image from "next/image";

interface Props {
  src: string | undefined;
  alt: string | undefined;
  width: number | null | undefined;
  height: number | null | undefined;
  classNameImage?: string;
}

export function Picture({
  src,
  alt = "",
  width,
  height,
  classNameImage,
}: Props) {
  if (src === undefined || width === null || height === null) return;
  return (
    <figure className={`flex flex-col gap-2 `}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={74}
        className={`w-full h-[335px] object-cover object-center sm:h-[760px] ${classNameImage}`}
      />
      <figcaption className="text-[#717171] tracking-[0.36px] leading-[22px] sm:text-[20px] sm:leading-[30px]">
        {alt}
      </figcaption>
    </figure>
  );
}
