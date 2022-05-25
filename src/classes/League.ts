import { LeagueModel, MtgFormats } from "../types";
import { v4 as uuidv4 } from 'uuid';

export class League implements LeagueModel {
    constructor(readonly id: string | null, public leagueName: string, public start_date: string, public end_date: string, public format: MtgFormats,) {
        this.id = uuidv4();
        this.leagueName = leagueName;
        this.start_date = start_date;
        this.end_date = end_date;
        this.format = format;
    }



}