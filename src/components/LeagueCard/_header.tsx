import { FC } from "react";
import {
  Colors,
  ElementSizes,
  ExtendCSS,
  FontVariants,
  MtgFormats,
} from "../../types";
import { fd } from "../../util";
import Chip from "../Chip";
import Typography from "../Typography";

type Props = ExtendCSS & {
  format: MtgFormats;
  leagueName: string;
  start: string;
  end: string;
};

const LeagueCardHeader: FC<Props> = ({ className, format, leagueName, start, end }) => {
  const classes = {
    header: `league-card__header`,
    title: `text-transform-uppercase`,
    subtitle: {
      left: `text-transform-uppercase font-weight-500 text-white`,
      right: `text-white font-weight-500`,
    },
  };
  return (
    <div className={classes.header}>
      <Typography variant={FontVariants.HEADING_3} className={classes.title}>
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
      <Chip bgColor={format} size={ElementSizes.LARGE} fontColor={Colors.BLACK}>
        {format}
      </Chip>
    </div>
  );
};

export default LeagueCardHeader;
