import { api } from '@api';
import { STORE } from '@types/store';

const actions = {
    [STORE.NAVIGATION.ACTION.GET]: async ({ commit }) => {
        try {
            commit(STORE.NAVIGATION.MUTATION.FETCH, true);

            const { data: menuItems } = await api.registry.getMenuItems();

            commit(STORE.NAVIGATION.MUTATION.FETCHED, new Date().getTime());
            commit(STORE.NAVIGATION.MUTATION.SET, menuItems);

            return menuItems;
        } catch (error) {
            commit(STORE.NAVIGATION.MUTATION.FETCH, false);
            return error;
        }
    },
};

export { actions };
