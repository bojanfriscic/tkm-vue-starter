import { actions } from "./actions";
import { mutations } from "./mutations";

const navigation = {
  state: {
    items: [],
    loading: false,
    fetched: false,
  },
  actions,
  mutations,
};

export { navigation };
