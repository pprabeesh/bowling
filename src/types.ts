import { type } from "os";

export type BowlingScoreDefinition = {
  roll: (numberOfPins: number) => void;
  getScore: () => number;
};
