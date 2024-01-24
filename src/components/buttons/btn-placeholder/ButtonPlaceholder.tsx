import useGame from "../../../hooks/useGame";

const ButtonPlaceholder = () => {
  const { status } = useGame();
  return (
    <div
      className={`${
        status === "active" ? "opacity-20" : ""
      } transition ease-in-out delay-1000 absolute opacity-0 bg-black rounded-full w-20 h-20 translate-x-16 translate-y-2 sm:translate-y-24 sm:translate-x-52 md:translate-y-28 sm:scale-[1.5] lg:translate-x-72 lg:translate-y-32 lg:scale-[2.5] `}
    ></div>
  );
};

export default ButtonPlaceholder;
