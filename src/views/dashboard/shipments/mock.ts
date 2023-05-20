import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // submit
    Mock.mock(new RegExp('/api/orders'), () => {
      return successResponseWrap([
        {
          id: 1,
          userId: 1,
          fromAddress: '北京市海淀区',
          toAddress: '天津市南开区',
          senderName: 'xxx',
          receiverName: 'yyy',
          senderPhone: '18601752706',
          receiverPhone: '18169809096',
          cargo: {
            id: 1,
            name: 'TEST1',
            length: 1.0,
            width: 1.0,
            height: 4.27,
            weight: 8.5,
          },
          createTime: '2023-05-19T20:33:50.680025',
          orderStatus: 'DELIVERED',
          shipments: [
            {
              id: 1,
              time: '2023-05-19T20:33:50.764941',
              description: '订单创建',
              type: 'ORDER',
            },
            {
              id: 2,
              time: '2023-05-19T20:38:23.898809',
              description: '货物已揽收',
              type: 'PROCESSING',
            },
            {
              id: 52,
              time: '2023-05-19T20:39:49.049142',
              description: '货物到达海淀中转站，发往天津',
              type: 'IN_TRANSIT',
            },
            {
              id: 53,
              time: '2023-05-19T20:40:52.801335',
              description: '快递到达天津',
              type: 'IN_TRANSIT',
            },
            {
              id: 54,
              time: '2023-05-19T20:41:06.435607',
              description: '货物已签收',
              type: 'DELIVERED',
            },
          ],
        },
      ]);
    });
  },
});
