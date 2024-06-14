interface Props {
  listItems: any[];
  format?: "ordered" | "unordered" | undefined;
}

export function List({ listItems = [], format = "ordered" }: Props) {
  if (listItems.length === 0) return;

  const Tag = `${
    format === "ordered" ? "ol" : "ul"
  }` as keyof JSX.IntrinsicElements;
  return (
    <Tag className="pl-5 flex flex-col gap-2">
      {listItems.map((listItem) => (
        <li className="text-[18px] tracking-[.36px] sm:text-[20px] relative before:content-['•'] before:absolute before:left-[-20px] before:top-1/2 before:-translate-y-1/2 before:text-[#aeb846] before:text-3xl before:text-center lg:before:text-4xl text-black">
          {listItem.children[0].text}
        </li>
      ))}
    </Tag>
  );
}
