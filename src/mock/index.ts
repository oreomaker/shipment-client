import Mock from 'mockjs';

import './user';
import './message-box';
import '@/views/dashboard/order/mock';
import '@/views/dashboard/shipments/mock';

Mock.setup({
  timeout: '600-1000',
});
