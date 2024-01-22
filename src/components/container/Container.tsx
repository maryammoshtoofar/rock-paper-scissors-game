import { ReactNode } from "react";
type Props = { children: ReactNode };
const Container = ({ children }: Props) => {
  return (
    <div className="background flex flex-col items-center h-screen justify-evenly">
      {children}
    </div>
  );
};

export default Container;
