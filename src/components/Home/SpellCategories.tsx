import { FC } from "react";
import { ApolloError } from "@apollo/client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useRecoilState, useRecoilValue } from "recoil";

import Loader from "../Common/Loader";

import { categoryViewState } from "../../atoms/otherAtom";
import {
  selectedCategoryState,
  spellClassesState,
} from "../../atoms/spellsAtom";
import ISpellClass from "../../interface/spellClassInterface";
import ClassIcons from "../../data/ClassIcons";

interface Props {
  categories: ISpellClass[];
  error?: ApolloError;
  loading?: boolean;
}

const SpellCategories: FC<Props> = ({ categories, error, loading }) => {
  const [isOpen, setIsOpen] = useRecoilState(categoryViewState);
  const spellClasses = useRecoilValue(spellClassesState);
  const [selectedCat, setSelecetdCat] = useRecoilState(selectedCategoryState);

  const handleClassesView = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedCategory = (index: string) => {
    if (index === selectedCat) {
      setSelecetdCat("");
    } else {
      setSelecetdCat(index);
    }
  };

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#dfddd6] p-4 m-4  md:mt-12 md:mx-12 rounded-md">
      <div
        className="flex items-center justify-between "
        onClick={handleClassesView}
      >
        <label className="uppercase font-bold text-sm md:text-base">
          Spell Categories :{" "}
          {spellClasses.find((c) => c.index === selectedCat)?.name}
        </label>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 md:hidden" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 md:hidden" />
        )}
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }  md:flex w-full overflow-x-scroll md:overflow-hidden md:flex-wrap scrollbar-hide space-x-1 md:space-x-0 items-center justify-start lg:justify-center mt-2 border-t-2 pt-4 border-purple-500`}
      >
        {categories.map((c) => (
          <div
            key={c.index}
            onClick={() => handleSelectedCategory(c.index)}
            className="min-w-[6rem] 2xl:min-w-[7rem] h-full md:my-2 flex flex-col items-center justify-center text-center"
          >
            <img
              className={`h-16 w-16 object-cover rounded-full border-2 border-purple-500 p-1 ${
                selectedCat === c.index ? "bg-purple-200" : "bg-white"
              }`}
              src={ClassIcons[c.index].image}
              alt={c.index}
            />
            <label className="text-xs uppercase w-full font-semibold mt-1">
              {c.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpellCategories;
