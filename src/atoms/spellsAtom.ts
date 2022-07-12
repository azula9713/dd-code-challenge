import { atom } from "recoil";

import ISpellClass from "../interface/spellClassInterface";
import { ISpell } from "../interface/spellsInterface";

export const allSpellsState = atom({
  key: "allSpellsState",
  default: [] as ISpell[],
});

export const spellClassesState = atom({
  key: "spellClassesState",
  default: [] as ISpellClass[],
});

export const favouriteSpellsState = atom({
  key: "favouriteSpellsState",
  default: null as unknown as ISpell[],
});

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});
