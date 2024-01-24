import scissors from "../assets/images/icon-scissors.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import { GameChoices } from "../types/types";
export type ButtonProps = {
  id: number;
  type: GameChoices;
  img: string;
  order: 1 | 2 | 3 | 4 | 5;
};
type Buttons = ButtonProps[];
const buttons: Buttons = [
  { id: 1, type: "scissors", img: scissors, order: 1 },
  { id: 2, type: "paper", img: paper, order: 2 },
  { id: 3, type: "rock", img: rock, order: 3 },
  { id: 4, type: "lizard", img: lizard, order: 4 },
  { id: 5, type: "spock", img: spock, order: 5 },
];

export default buttons;
