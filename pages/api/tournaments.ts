import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";
import { Tournament } from "../../src/classes/Tournament";
import { MtgFormats, TournamentModel } from "../../src/types";
import { Challenger } from "../../src/classes/Challenger";

type Data = {};

export const tournamentsArr: TournamentModel[] = [];

for (let index = 0; index < 6; index++) {
  tournamentsArr.push(
    new Tournament(
      null,
      "393f2fc5-c3a4-49dc-8095-210eb5a97c7c",
      new Date().toISOString(),
      new Date().toISOString(),
      null,
      new Array(5).fill(0).map(() => new Challenger(null, "Jhonny Vorthos", 7))
    )
  );
}
for (let index = 0; index < 6; index++) {
  tournamentsArr.push(
    new Tournament(
      null,
      "18f2f83c-7859-44ce-b0d5-0eef1aa59298",
      new Date().toISOString(),
      new Date().toISOString(),
      null,
      new Array(5).fill(0).map(() => new Challenger(null, "Jhonny Vorthos", 7))
    )
  );
}
for (let index = 0; index < 6; index++) {
  tournamentsArr.push(
    new Tournament(
      null,
      "4a944c05-0eb6-4dea-8128-1f6a1bbca77b",
      new Date().toISOString(),
      new Date().toISOString(),
      null,
      new Array(5).fill(0).map(() => new Challenger(null, "Jhonny Vorthos", 7))
    )
  );
}

export default function tournaments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body, query } = req;

  const handleGet = async () => {
    console.warn("/api/tournaments => handleGet");
    return res.status(200).json({
      data: tournamentsArr,
    });
  };

  const handleGetOne = async (_id: string) => {
    console.warn("/api/tournaments => handleGetOne");

    return res.status(200).json({
      data: tournamentsArr.find(({ id }) => {
        console.log(_id, 
        id);
        return _id === id;
      }),
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
