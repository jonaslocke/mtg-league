import type { NextApiRequest, NextApiResponse } from 'next'
import { League } from "../../src/classes/League"
import { MtgFormats } from '../../src/types'
import { LeagueModel } from "../../src/types"

type Data = {

}

const leaguesArr: LeagueModel[] = [];
for (let i = 0; i < 10; i++) {
    leaguesArr.push(new League(null, `${MtgFormats.PIONEER} league #${i}`, new Date().toISOString(), new Date().toISOString(), MtgFormats.PIONEER))
}

export default function leagues(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ data: leaguesArr })
}