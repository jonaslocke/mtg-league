import { FC } from "react";
import { LeaderboardModel } from "../../types";
import LeagueTable from "../LeagueTable";
import LeagueCardHeader from "./_header";

const LeagueCard: FC<LeaderboardModel> = (props) => {

  const {
    id,
    format,
    image,
  } = props

  const classes = {
    wrapper: `league-card mtg-bd-color-${format}`,
    image: `league-card__image`,
    inner: `league-card__inner`,
    content: `league-card__content mt-2 flex-1`,
  };

  return (
    <div id={`mtg-leagues-league-${id}`} className={classes.wrapper}>
      <img src={image} className={classes.image} />
      <div className={classes.inner}>
        <LeagueCardHeader {...props} />
        <div className={classes.content}>
          <LeagueTable />
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
