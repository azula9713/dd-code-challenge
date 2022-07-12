import { FC } from "react";
import { useRecoilState } from "recoil";
import { searchTextState } from "../../atoms/spellsAtom";

const SearchBox: FC = () => {
  const [searchText, setSearchTxt] = useRecoilState(searchTextState);

  return (
    <>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-700 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-[#cecece] rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 ring-red-500 focus:outline-none"
          placeholder="Search Spells..."
          required
          value={searchText}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
