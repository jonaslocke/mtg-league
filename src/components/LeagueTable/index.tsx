import { FC } from "react";
import { ExtendCSS } from "../../types";

type Props = ExtendCSS & {};

const LeagueTable: FC<Props> = ({ className }) => {
  const classes = {
    wrapper: `league-table pa-1`,
  };
  if (className) {
    classes.wrapper += " " + className;
  }
  return <div className={classes.wrapper}>
    lorem*10
  </div>;
};

export default LeagueTable;
