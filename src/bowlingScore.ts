import { BowlingScoreDefinition } from "./types";
import { MAX_FRAMES } from "./constants";

export const BowlingScore = (): BowlingScoreDefinition => {
  // Array to store all rolls
  const rolls: Array<number> = [];

  // check if frame is a spare frame
  const isSpare = (rollIndex: number): boolean =>
    rolls[rollIndex] + rolls[rollIndex + 1] === 10;

  //check if frame is a strike frame
  const isStrike = (rollIndex: number): boolean => rolls[rollIndex] === 10;

  return {
    roll: (numberOfPins: number) => rolls.push(numberOfPins),
    getScore: () => {
      let score: number = 0;

      // loop through frames until max frame or rolls till now
      for (
        let currentFrame: number = 0, currentRoll: number = 0;
        currentFrame < MAX_FRAMES && currentRoll < rolls.length;
        currentFrame++
      ) {
        //add number of pins to score
        score += rolls[currentRoll];
        score += rolls[currentRoll + 1];

        // add bonus to score is frame is spare or strike
        if (isSpare(currentRoll) || isStrike(currentRoll)) {
          score += rolls[currentRoll + 2];
        }

        // increment currentRoll index based on whether it is strike or not
        isStrike(currentRoll) ? currentRoll++ : (currentRoll += 2);
      }

      return score;
    },
  };
};
