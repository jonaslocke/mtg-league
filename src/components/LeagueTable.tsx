import { FC } from "react";
import { ExtendCSS } from "../types";

type Props = ExtendCSS & {};

const LeagueTable: FC<Props> = ({ className }) => {
  const classes = {
    wrapper: ``,
  };
  if (className) {
    classes.wrapper += " " + className;
  }
  return <div className={classes.wrapper}>league table</div>;
};

export default LeagueTable;
