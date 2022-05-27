import { FC } from "react";
import { LeagueModel } from "../../types";
import LeagueTable from "../LeagueTable";
import LeagueCardHeader from "./_header";

const LeagueCard: FC<LeagueModel> = ({
  id,
  start,
  end,
  format,
  leagueName,
  image,
  createdAt,
}) => {
  const classes = {
    wrapper: `league-card mtg-bd-color-${format}`,
    image: `league-card__image`,
    inner: `league-card__inner`,
    content: `flex-1`,
  };

  return (
    <div id={`mtg-leagues-league-${id}`} className={classes.wrapper}>
      <img src={image} className={classes.image} />
      <div className={classes.inner}>
        <LeagueCardHeader
          end={end}
          start={start}
          format={format}
          leagueName={leagueName}
        />

        <div className={classes.content}>
          <LeagueTable />
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
