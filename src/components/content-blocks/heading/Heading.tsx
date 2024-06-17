interface Props {
  text: string | undefined;
  level: number | undefined;
}

export function Heading({ text = "", level }: Props) {
  if (text === undefined) return;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className="text-[48px] tracking-[-0.18px] leading-[64px] sm:text-[64px] sm:tracking-[-.64px] sm:leading-[80px] lg:tracking-[0.48px]">
      {text}
    </Tag>
  );
}
