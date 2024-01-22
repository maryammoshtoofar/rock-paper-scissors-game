import { ReactNode } from "react";
type Props = { children: ReactNode };

const ScoreContainer = (props: Props) => {
  return (
    <div className="text-dark bg-white rounded-lg flex flex-col items-center px-6 py-4">
      {props.children}
    </div>
  );
};

export default ScoreContainer;
