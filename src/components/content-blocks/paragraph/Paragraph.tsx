interface Props {
  text: string | undefined;
}

export function Paragraph({ text = "" }: Props) {
  if (text === undefined) return;
  return (
    <p className="text-[18px] tracking-[.36px] leading-[24px] sm:text-[20px] sm:leading-[30px]">
      {text}
    </p>
  );
}
