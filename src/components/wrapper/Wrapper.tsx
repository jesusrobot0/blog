interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Wrapper({ children, className }: Props) {
  return (
    <div className={`w-[90%] max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
