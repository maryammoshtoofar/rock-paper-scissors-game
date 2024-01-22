import Button from "./button/Button";
import buttons from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";

const Buttons = () => {
  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
    </ButtonsContainer>
  );
};

export default Buttons;
