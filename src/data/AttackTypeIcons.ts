import MeeleIcon from "../assets/melee.png";
import RangedIcon from "../assets/ranged.png";

import { StringArray } from "../interface/StringArrays";

const AttackTypeIcons: StringArray = {
  ranged: {
    image: RangedIcon,
  },

  melee: {
    image: MeeleIcon,
  },
};

export default AttackTypeIcons;
