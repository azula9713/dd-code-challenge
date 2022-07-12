import { FC, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRecoilState, useRecoilValue } from "recoil";

import { GET_ALL_SPELLS, GET_ALL_SPELL_CLASSES } from "../services/dnd5eAPI";
import {
  allSpellsState,
  searchTextState,
  selectedCategoryState,
  spellClassesState,
} from "../atoms/spellsAtom";

import ListSpells from "../components/Home/ListSpells";
import SearchBox from "../components/Common/SearchBox";
import SpellCategories from "../components/Home/SpellCategories";
import { ISpell } from "../interface/spellsInterface";
import ISpellClass from "../interface/spellClassInterface";

import HeroBg from "../assets/herobg.jpg";
import Loader from "../components/Common/Loader";

const Home: FC = () => {
  const [spells, setSpells] = useRecoilState<ISpell[]>(allSpellsState);
  const [spellClasses, setSpellClasses] =
    useRecoilState<ISpellClass[]>(spellClassesState);

  const searchValue = useRecoilValue(searchTextState);
  const selectedCat = useRecoilValue(selectedCategoryState);

  const { loading, error, data } = useQuery(GET_ALL_SPELLS, {
    variables: { limit: null },
  });

  const {
    loading: spellClassLoading,
    error: spellClassError,
    data: spellClassData,
  } = useQuery(GET_ALL_SPELL_CLASSES);

  useEffect(() => {
    if (data && data.spells) {
      let filtered: ISpell[] = [];
      if (selectedCat === "") {
        filtered = data.spells;
      } else {
        data.spells.forEach((spell: ISpell) => {
          if (spell.classes.find((c) => c.index === selectedCat)) {
            filtered.push(spell);
          }
        });
      }

      if (searchValue !== "") {
        filtered = filtered.filter((spell) => {
          return spell.name.toLowerCase().includes(searchValue.toLowerCase());
        });
      }

      setSpells(filtered);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selectedCat, searchValue]);

  useEffect(() => {
    if (spellClassData && spellClassData.classes) {
      setSpellClasses(spellClassData.classes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spellClassData]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <main
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="mt-4 px-4 lg:hidden">
        <SearchBox />
      </div>
      <div>
        <SpellCategories
          categories={spellClasses}
          error={spellClassError}
          loading={spellClassLoading}
        />
        <ListSpells listSpells={spells} />
      </div>
    </main>
  );
};

export default Home;
