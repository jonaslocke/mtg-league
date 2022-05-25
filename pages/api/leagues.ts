import type { NextApiRequest, NextApiResponse } from 'next'
import { League } from "../../src/classes/League"
import { MtgFormats } from '../../src/types'
import { LeagueModel } from "../../src/types"

type Data = {

}

const leaguesArr: LeagueModel[] = [];
for (let i = 0; i < 5; i++) {
    leaguesArr.push(new League(null, `${MtgFormats.MODERN} league #${i}`, new Date().toISOString(), new Date().toISOString(), i % 2 == 0 ? MtgFormats.MODERN : MtgFormats.STANDARD))
}

export default function leagues(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ data: leaguesArr })
}