import { FC } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HeartIcon as HeartFilled } from "@heroicons/react/solid";
import { HeartIcon as HeartEmpty } from "@heroicons/react/outline";

import { favouriteSpellsState } from "../../atoms/spellsAtom";
import AttackTypeIcons from "../../data/AttackTypeIcons";
import { ISpell } from "../../interface/spellsInterface";

interface Props {
  spell: ISpell;
}

const SpellCard: FC<Props> = ({ spell }) => {
  const [favoSpells, setFavoSpells] = useRecoilState(favouriteSpellsState);

  const manageFavouriteSpells = () => {
    let tempSpells = favoSpells;

    if (tempSpells === null) {
      tempSpells = [];
    }
    try {
      if (tempSpells.includes(spell)) {
        tempSpells = tempSpells.filter((s) => s.index !== spell.index);
      } else {
        tempSpells = [...tempSpells, spell];
      }

      setFavoSpells(tempSpells);
    } catch (error) {
      console.log("error", error);
      alert("Failed to add to favourites");
    }
  };

  return (
    <div
      key={spell.index}
      className="h-16 p-2 bg-white my-2 rounded-md flex items-center justify-between"
    >
      {/* Level */}
      <Link to={`/spells/${spell.index}`} className="w-full">
        <div className="flex flex-col w-2/3">
          {/* Name */}
          <div className="flex items-center justify-start">
            <div className="font-bold text-sm md:text-base font-cinzel">
              {spell.name}
            </div>
            {spell.attack_type && (
              <div className="text-xs ml-2 w-5">
                <img
                  src={AttackTypeIcons[spell.attack_type].image}
                  alt={spell.attack_type}
                />
              </div>
            )}
          </div>

          {/* Duration , Components */}
          <div className="flex items-center justify-start w-full">
            <div className="font-semibold text-xs md:text-sm mr-2 text-gray-700 w-full ">
              {spell.duration}
            </div>
            <div className="flex text-xs md:text-sm text-red-700">
              {spell?.damage?.damage_type?.name}
            </div>
          </div>
        </div>
      </Link>
      {/* Buttons */}
      <div className="flex w-1/6 text-red-500">
        <button
          onClick={() => {
            manageFavouriteSpells();
          }}
        >
          {favoSpells?.find((s) => s.index === spell.index) ? (
            <HeartFilled className="h-5 w-5" />
          ) : (
            <HeartEmpty className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpellCard;
