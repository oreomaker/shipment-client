import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';
import useShipmentStore from './modules/shipment';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useShipmentStore };
export default pinia;
