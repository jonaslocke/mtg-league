import { FC } from "react";
import { Colors, ElementSizes, FontVariants, LeagueModel } from "../../types";
import { fd } from "../../util";
import Chip from "../Chip";
import LeagueTable from "../LeagueTable";
import Typography from "../Typography";

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
    header: `league-card__header`,
    content: `flex-1`,
    title: `text-transform-uppercase`,
    subtitle: {
      left: `text-transform-uppercase font-weight-500 text-white`,
      right: `text-white font-weight-500`,
    },
  };

  return (
    <div id={`mtg-leagues-league-${id}`} className={classes.wrapper}>
      <img src={image} className={classes.image} />
      <div className={classes.inner}>
        <div className={classes.header}>
          <Typography
            variant={FontVariants.HEADING_3}
            className={classes.title}
          >
            {leagueName}
          </Typography>
          <div className="d-flex justify-space-between">
            <span>
              <Typography
                variant={FontVariants.SUBTITLE_2}
                className={classes.subtitle.left}
              >
                Start:{" "}
              </Typography>
              <Typography
                variant={FontVariants.SUBTITLE_2}
                className={classes.subtitle.right}
              >
                {fd(start)}
              </Typography>
            </span>
            <span>
              <Typography
                variant={FontVariants.SUBTITLE_2}
                className={classes.subtitle.left}
              >
                End:{" "}
              </Typography>
              <Typography
                variant={FontVariants.SUBTITLE_2}
                className={classes.subtitle.right}
              >
                {fd(end)}
              </Typography>
            </span>
          </div>
          <Chip
            bgColor={format}
            size={ElementSizes.LARGE}
            fontColor={Colors.BLACK}
          >
            {format}
          </Chip>
        </div>
        <div className={classes.content}>
          <LeagueTable />
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
