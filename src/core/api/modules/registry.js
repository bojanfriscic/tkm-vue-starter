import axios from 'axios';
import { authInterceptor } from '../utils/authInterceptor';
import { validateStatus } from '../utils/validateStatus';

const registryApi = axios.create({
    baseURL: 'https://products-registry.api.qiwa.info',
    withCredentials: true,
    validateStatus,
});

registryApi.interceptors.response.use((res) => res, authInterceptor);

export function getMenuItems() {
    return registryApi.get('menu-items');
}
