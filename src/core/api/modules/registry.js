import axios from 'axios';
import { authInterceptor } from '../utils/authInterceptor';
import { validateStatus } from '../utils/validateStatus';

const registryApi = axios.create({
    baseURL: `${process.env.VUE_APP_REGISTRY_API_URL}/api`,
    withCredentials: true,
    validateStatus,
});

registryApi.interceptors.response.use((res) => res, authInterceptor);

function getMenuItems() {
    return registryApi.get('menu-items');
}

const registry = {
    getMenuItems,
};

export { registry };
