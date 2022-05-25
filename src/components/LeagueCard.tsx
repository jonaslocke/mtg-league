import { FC } from "react";
import { LeagueModel } from "../types";

const LeagueCard: FC<LeagueModel> = ({
  id,
  end_date,
  format,
  leagueName,
  start_date,
}) => {
  return <div id={`mtg-leagues-league-${id}`}>{leagueName}</div>;
};

export default LeagueCard;
