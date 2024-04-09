interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Wrapper({ children }: Props) {
  return <div className="flex flex-col items-center">{children}</div>;
}
