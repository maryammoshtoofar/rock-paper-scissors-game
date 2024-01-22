import usePosition from "../../../hooks/usePosition";
import { ButtonProps } from "../../../lib/buttons";

const Button = ({ type, order, img }: ButtonProps) => {
  const position = usePosition(order);
  return (
    <button
      className={`gradient-border absolute rounded-full  flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 ${type} ${position}`}
    >
      <div className="box-shadow  bg-white rounded-full flex flex-col items-center justify-center p-4 w-full h-full">
        <img src={img} className="w-10" />
      </div>
    </button>
  );
};

export default Button;
