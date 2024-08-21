import { createPinia } from 'pinia';
import { localStoragePlugin } from './plugins/localStoregePlugin';

const pinia = createPinia();

pinia.use(localStoragePlugin);

export default pinia;
