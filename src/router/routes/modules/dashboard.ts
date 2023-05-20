import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-computer',
    order: 0,
  },
  children: [
    {
      path: 'order',
      name: 'Order',
      component: () => import('@/views/dashboard/order/index.vue'),
      meta: {
        locale: 'menu.dashboard.order',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'shipments',
      name: 'Shipments',
      component: () => import('@/views/dashboard/shipments/index.vue'),
      meta: {
        locale: 'menu.dashboard.shipments',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
