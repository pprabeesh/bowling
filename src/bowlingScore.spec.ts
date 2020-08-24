import { BowlingScore } from "./bowlingScore";
import { BowlingScoreDefinition } from "./types";

describe("BowlingScore", () => {
  let Bowling: BowlingScoreDefinition;

  beforeEach(() => {
    Bowling = BowlingScore();
  });

  const addRolls = (numberOfRollsToRoll: number, numberOfPins: number) => {
    for (
      let numberOfRolls = 0;
      numberOfRolls < numberOfRollsToRoll;
      numberOfRolls++
    ) {
      Bowling.roll(numberOfPins);
    }
  };

  it("should return score 0 if all rolls are in gutter", () => {
    addRolls(20, 0);
    expect(Bowling.getScore()).toBe(0);
  });

  it("should return score 40 if all rolls are 2", () => {
    addRolls(20, 2);
    expect(Bowling.getScore()).toBe(40);
  });

  it("should return score 10 with one spare and gutters in all other rows ", () => {
    addRolls(1, 6);
    addRolls(1, 4);
    addRolls(18, 0);
    expect(Bowling.getScore()).toBe(10);
  });

  it("should return score 48 with one spare and 2 in all other rows ", () => {
    addRolls(1, 6);
    addRolls(1, 4);
    addRolls(18, 2);
    expect(Bowling.getScore()).toBe(48);
  });

  it("should return score 48 with one spare in between and 2 in all other rows ", () => {
    addRolls(10, 2);
    addRolls(1, 6);
    addRolls(1, 4);
    addRolls(8, 2);
    expect(Bowling.getScore()).toBe(48);
  });

  it("should return score 10 with one strike and gutters in all other rows", () => {
    addRolls(1, 10);
    addRolls(18, 0);
    expect(Bowling.getScore()).toBe(10);
  });

  it("should return score 50 with one strike and 2 in all other rows", () => {
    addRolls(1, 10);
    addRolls(18, 2);
    expect(Bowling.getScore()).toBe(50);
  });

  it("should return score 50 with one strike in between and 2 in all other rows", () => {
    addRolls(10, 2);
    addRolls(1, 10);
    addRolls(8, 2);
    expect(Bowling.getScore()).toBe(50);
  });

  it("should return score 300 with all strikes", () => {
    addRolls(12, 10);
    expect(Bowling.getScore()).toBe(300);
  });

  it("should return score 255 with 9 strikes and one open frame", () => {
    addRolls(9, 10);
    addRolls(2, 3);
    expect(Bowling.getScore()).toBe(255);
  });

  it("should return score 274 with 9 strikes and one spare frame", () => {
    addRolls(9, 10);
    addRolls(2, 5);
    addRolls(1, 9);
    expect(Bowling.getScore()).toBe(274);
  });

  it("should return score 8 if first two rolls are 4", () => {
    addRolls(2, 4);
    expect(Bowling.getScore()).toBe(8);
  });

  it("should return score 20 if rolls are 4,6 | 5, 0", () => {
    addRolls(1, 4);
    addRolls(1, 6);
    addRolls(1, 5);
    addRolls(1, 0);
    expect(Bowling.getScore()).toBe(20);
  });

  it("should return score 28 if rolls are 10 | 5, 4", () => {
    addRolls(1, 10);
    addRolls(1, 5);
    addRolls(1, 4);
    expect(Bowling.getScore()).toBe(28);
  });
});
