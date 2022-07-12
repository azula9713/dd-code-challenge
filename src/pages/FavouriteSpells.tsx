import { FC } from "react";
import { useRecoilValue } from "recoil";

import HeroBg from "../assets/herobg.jpg";
import { favouriteSpellsState } from "../atoms/spellsAtom";
import ListSpells from "../components/Home/ListSpells";

const FavouriteSpells: FC = () => {
  const favoSpells = useRecoilValue(favouriteSpellsState);

  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] overflow-hidden"
    >
      <h2 className="mt-4 px-4 text-center text-[#dfddd6] uppercase text-4xl md:text-5xl">
        Favourite Spells
      </h2>
      <ListSpells listSpells={favoSpells} />
    </div>
  );
};

export default FavouriteSpells;
