import type { NextApiRequest, NextApiResponse } from "next";
import { League } from "../../src/classes/League";
import { MtgFormats } from "../../src/types";
import { LeagueModel } from "../../src/types";
import { getBackground } from "../../src/util";

type Data = {};

const leaguesArr: LeagueModel[] = [];
for (let i = 0; i < 5; i++) {
    const league = new League(
        null,
        `${MtgFormats.PIONEER} League #${i + 1}`,
        new Date().toISOString(),
        new Date().toISOString(),
        MtgFormats.PIONEER,
        getBackground(),
        new Date().toISOString(),
        null,
    );
    leaguesArr.push(league);
}

export default function leagues(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ data: leaguesArr });
}
