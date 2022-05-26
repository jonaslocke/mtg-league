import { FC } from "react";
import { Colors, ElementSizes, MtgFormats } from "../types";
import { getEnum } from "../util";
type Props = {
  size: ElementSizes;
  children: string | string[];
  bgColor: MtgFormats | Colors;
  fontColor: Colors;
};
const Chip: FC<Props> = ({ size, children, bgColor, fontColor }) => {
  let isMtgColor = false;
  for (let i of Object.values(MtgFormats)) {
    if (!isMtgColor) {
      isMtgColor = i === bgColor || isMtgColor;
    }
  }
  const classes = {
    base: `d-inline-block pxy-2-1 mt-2 br-2 fz-2 font-weight-700 ls-6 text-transform-uppercase text-${fontColor}`,
    background: isMtgColor
      ? `mtg-bg-color-${bgColor}`
      : `background-${bgColor}`,
  };

  console.log(getEnum(MtgFormats, "alchemy"));
  return (
    <span className={[classes.base, classes.background].join(" ")}>
      {children}
    </span>
  );
};

export default Chip;
