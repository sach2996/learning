import { selector } from "recoil";
import { countAtom } from "./store/atoms/count";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    //(props)
    const count = get(countAtom);
    return count % 2 == 0;
  },
});
