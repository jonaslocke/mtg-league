import { FC } from "react";
import { LeagueModel } from "../types";

const LeagueCard: FC<LeagueModel> = ({
  id,
  end_date,
  format,
  leagueName,
  start_date,
}) => {
  const classes = `league-card mtg-bd-color-${format}`;

  return (
    <div id={`mtg-leagues-league-${id}`} className={classes}>
      {leagueName}
    </div>
  );
};

export default LeagueCard;
