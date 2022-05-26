import { LeagueModel, MtgFormats } from "../types";
import { v4 as uuidv4 } from "uuid";

export class League implements LeagueModel {
    constructor(
        readonly id: string | null,
        public leagueName: string,
        public start: string,
        public end: string,
        public format: MtgFormats,
        public image: string,
        public createdAt: string,
        public deletedOn: string | null,
    ) {
        this.id = uuidv4();
        this.leagueName = leagueName;
        this.start = start;
        this.end = end;
        this.format = format;
        this.image = image;
        this.createdAt = createdAt;
        this.deletedOn = null;
    }
}
