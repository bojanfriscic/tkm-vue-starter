import { auth } from './modules/auth';
import { registry } from './modules/registry';

// const violations = () => [
//     { id: 1, name: 'test' },
//     { id: 2, name: 'test2' },
// ];

const api = {
    auth,
    registry,
};

export { api };
