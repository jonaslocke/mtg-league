import { v4 as uuidv4 } from "uuid";
import { ChallengerModel, TournamentModel, MtgFormats } from "../types";

export class Tournament implements TournamentModel {
  constructor(
    readonly id: string | null,
    public leaderBoardId: string,
    public date: string,
    public createdAt: string,
    public deletedOn: string | null,
    public challengers: ChallengerModel[]
  ) {
    this.id = uuidv4();
    this.leaderBoardId = leaderBoardId;
    this.date = date;
    this.createdAt = createdAt;
    this.deletedOn = deletedOn;
    this.challengers = challengers;
  }
}
