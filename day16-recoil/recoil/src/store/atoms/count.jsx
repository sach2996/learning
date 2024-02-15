import { atom, selector } from "recoil";
import axios from "axios";
export const countAtom = atom({ key: "counAtom", default: 0 });

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
