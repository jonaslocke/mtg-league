import type { NextApiRequest, NextApiResponse } from "next";
import { League } from "../../src/classes/League";
import { MtgFormats } from "../../src/types";
import { LeaderboardModel } from "../../src/types";
import { getBackground } from "../../src/util";
import { tournamentsArr } from "./tournaments";

type Data = {};

const leaguesArr: LeaderboardModel[] = [];
const leaguesIds = [
  "393f2fc5-c3a4-49dc-8095-210eb5a97c7c",
  "18f2f83c-7859-44ce-b0d5-0eef1aa59298",
  "4a944c05-0eb6-4dea-8128-1f6a1bbca77b",
];
const leagueFormats = [
  MtgFormats.PIONEER,
  MtgFormats.MODERN,
  MtgFormats.PAUPER,
];
for (let i = 0; i < leaguesIds.length; i++) {
  const league = new League(
    leaguesIds[i],
    `${leagueFormats[i]} League #${i + 1}`,
    new Date().toISOString(),
    new Date().toISOString(),
    leagueFormats[i],
    getBackground(),
    new Date().toISOString(),
    null
  );
  leaguesArr.push(league);
}

export default function leagues(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body, query } = req;

  const handleGet = async () => {
    console.warn("/api/leagues => handleGet");
    return res.status(200).json({
      data: leaguesArr,
    });
  };

  const handleGetOne = async (_id: string) => {
    console.warn("/api/leagues => handleGetOne");
    const data = leaguesArr.find(({ id }) => _id === id);
    const tournaments = tournamentsArr.find(
      ({ leaderBoardId }) => leaderBoardId === _id
    );

    if (!data || !tournaments) {
      return res.status(400).json({ message: "Not found" });
    }

    return res.status(200).json({
      data,
      tournaments,
    });
  };

  switch (method) {
    case "GET":
      return query.id ? handleGetOne(query.id as string) : handleGet();
    // case "POST":
    //   return createNewMenu(body);
    // case "DELETE":
    //   return isProductAddRequest(body)
    //     ? removeProductFromMenu(body)
    //     : handleDelete(body.id);
    // case "PATCH":
    //   return handlePatch(body);
  }
}
