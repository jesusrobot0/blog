interface Props {
  text: string | undefined;
}
export function Quote({ text = "" }: Props) {
  if (text === undefined) return;

  return (
    <blockquote className="flex flex-col gap-[20px] sm:flex-row sm:items-start sm:gap-0">
      <img
        src="/icons/quote.svg"
        alt="Quote icon"
        className="w-[80px] h-[80px]"
      />
      <span className="text-[32px] tracking-[-0.18px] leading-[42px] sm:text-[48px] sm:tracking-[-.64px] sm:leading-[64px] lg:w-2/3">
        {text}
      </span>
    </blockquote>
  );
}
