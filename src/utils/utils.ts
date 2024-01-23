import { ComputerChoices, GameResult } from "../types/types";

export const generateComputerChoice = () => {
  const possibleChoices = <ComputerChoices>[
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
  ];
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  const computerChoice = possibleChoices[randomNumber];
  return computerChoice;
};
export const generateGameResult = (
  userChoice: string | null,
  computerChoice: string | null
): GameResult => {
  let result: GameResult = null;
  if (userChoice === computerChoice) {
    result = "tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper" || computerChoice === "spock") {
      result = "lose";
    }
    if (computerChoice === "scissors" || computerChoice === "lizard") {
      result = "win";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "lizard") {
      result = "lose";
    }
    if (computerChoice === "rock" || computerChoice === "spock") {
      result = "win";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock" || computerChoice === "spock") {
      result = "lose";
    }
    if (computerChoice === "paper" || computerChoice === "lizard") {
      result = "win";
    }
  } else if (userChoice === "lizard") {
    if (computerChoice === "scissors" || computerChoice === "rock") {
      result = "lose";
    }
    if (computerChoice === "spock" || computerChoice === "paper") {
      result = "win";
    }
  } else if (userChoice === "spock") {
    if (computerChoice === "lizard" || computerChoice === "paper") {
      result = "lose";
    }
    if (computerChoice === "scissors" || computerChoice === "rock") {
      result = "win";
    }
  }
  return result;
};

export const generateScore = (result: GameResult, score: number) => {
  let finalScore: number = score;
  if (result === "win") {
    finalScore = score + 1;
  }
  return finalScore;
};
