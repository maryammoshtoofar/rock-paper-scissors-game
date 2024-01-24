import Button from "./game-button/GameButton";
import buttons, { ButtonProps } from "../../lib/buttons";
import ButtonsContainer from "./buttons-container/ButtonsContainer";
import { useContext, useEffect, useState } from "react";
import {
  generateComputerChoice,
  generateGameResult,
  generateScore,
} from "../../utils/utils";
import { GameContext } from "../../context/GameContext";
import { GameChoices } from "../../types/types";
import ButtonPlaceholder from "./btn-placeholder/ButtonPlaceholder";
import GameButton from "./game-button/GameButton";

const Buttons = () => {
  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
      <ButtonPlaceholder />
    </ButtonsContainer>
  );
};

export default Buttons;
