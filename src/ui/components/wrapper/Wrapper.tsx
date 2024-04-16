interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Wrapper({ children }: Props) {
  return <div className="w-[90%] max-w-[1440px] mx-auto">{children}</div>;
}
