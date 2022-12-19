import { ChallengerModel, LeaderboardModel, MtgFormats } from "../types";
import { v4 as uuidv4 } from "uuid";

export class Challenger implements ChallengerModel {
  constructor(
    readonly id: string | null,
    public name: string,
    public points: number
  ) {
    this.id = uuidv4();
    this.name = name;
    this.points = points;
  }
}
