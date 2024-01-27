import Button from "./game-button/GameButton";
import buttons from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";
import ButtonPlaceholder from "./btn-placeholder/ButtonPlaceholder";
import useGame from "../../hooks/useGame";

const Buttons = () => {
  const { secondButton, result, status, resetBoard } = useGame();

  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
      <ButtonPlaceholder />
      {secondButton && (
        <Button secondButton key={secondButton.id} {...secondButton} />
      )}
      {status === "over" && (
        <div className="absolute  w-1/2 uppercase flex flex-col text-white items-center text-4xl gap-4 top-36 md:top-1/2 ">
          you {result}
          <button
            onClick={resetBoard}
            className="text-base leading-loose w-full uppercase bg-white text-dark px-10 py-2 hover:text-red-600 transition-all rounded-md"
          >
            play again
          </button>
        </div>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
