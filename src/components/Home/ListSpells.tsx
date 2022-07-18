import { FC } from "react";
import { useRecoilValue } from "recoil";

import SpellCard from "../Common/SpellCard";
import { ISpell } from "../../interface/spellsInterface";
import { categoryViewState } from "../../atoms/otherAtom";

interface Props {
  listSpells: ISpell[];
}

const ListSpells: FC<Props> = ({ listSpells }) => {
  const categoryViewOpen = useRecoilValue(categoryViewState);

  const calcValue = categoryViewOpen ? "20rem" : "16rem";

  return (
    <div
      className={`p-8 h-[calc(100vh-${calcValue})] md:h-[calc(100vh-30rem)] xl:h-[calc(100vh-20rem)] overflow-y-scroll scrollbar-hide md:grid md:grid-cols-2 xl:grid-cols-3 gap-4`}
    >
      {listSpells?.map((spell) => (
        <SpellCard key={spell.index} spell={spell} />
      ))}
    </div>
  );
};

export default ListSpells;
