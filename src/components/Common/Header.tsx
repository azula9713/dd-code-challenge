import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";

import SearchBox from "./SearchBox";
import Logo from "../../assets/logo.png";
import { favouriteSpellsState } from "../../atoms/spellsAtom";

const Header: FC = () => {
  const [favoSpells, setFavoSpells] = useRecoilState(favouriteSpellsState);

  useEffect(() => {
    const localStorageFavoSpells = localStorage.getItem("favoSpells");
    if (localStorageFavoSpells) {
      setFavoSpells(JSON.parse(localStorageFavoSpells));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (favoSpells !== null) {
      localStorage.setItem("favoSpells", JSON.stringify(favoSpells));
    }
  }, [favoSpells]);

  return (
    <header className="h-16 py-4 px-4 md:px-12 bg-[#dfddd6]">
      <div className="w-full flex items-center justify-between h-full">
        <Link className="h-8 w-32" to="/">
          <img src={Logo} alt="logo" className="w-full" />
        </Link>
        <div className="hidden md:block md:w-1/3">
          <SearchBox />
        </div>
        <Link to="/favourites">
          <HeartIcon className="h-6 w-6 text-red-500" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
