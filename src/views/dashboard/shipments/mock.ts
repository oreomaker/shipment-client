import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // submit
    Mock.mock(new RegExp('/api/channel-form/submit'), () => {
      return successResponseWrap('ok');
    });
    // get table data
    Mock.mock(new RegExp('/api/warehouse/outList'), () => {
      return successResponseWrap([
        {
          id: 1603,
          branch: {
            id: 0,
            city: '北京市',
          },
          earliestTime: '2023-05-08T09:16:58.4944',
          cargoList: [
            {
              id: 3155,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T09:16:58',
              outTime: null,
              status: 1,
              outBranch: {
                id: 0,
                city: '北京市',
              },
            },
          ],
          is_delete: false,
          is_available: true,
        },
        {
          id: 1604,
          branch: {
            id: 1,
            city: '上海市',
          },
          earliestTime: '2023-05-08T09:17:21.214181',
          cargoList: [
            {
              id: 3156,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T09:17:21',
              outTime: null,
              status: 1,
              outBranch: {
                id: 1,
                city: '上海市',
              },
            },
            {
              id: 3157,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T09:17:22',
              outTime: null,
              status: 1,
              outBranch: {
                id: 1,
                city: '上海市',
              },
            },
            {
              id: 3158,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T09:17:23',
              outTime: null,
              status: 1,
              outBranch: {
                id: 1,
                city: '上海市',
              },
            },
          ],
          is_delete: false,
          is_available: false,
        },
        {
          id: 1652,
          branch: {
            id: 2,
            city: '南京市',
          },
          earliestTime: '2023-05-08T10:39:33.65007',
          cargoList: [
            {
              id: 3202,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T10:39:33',
              outTime: null,
              status: 1,
              outBranch: {
                id: 2,
                city: '南京市',
              },
            },
            {
              id: 3203,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T10:39:35',
              outTime: null,
              status: 1,
              outBranch: {
                id: 2,
                city: '南京市',
              },
            },
            {
              id: 3204,
              name: '羊毛衫',
              length: 2.0,
              width: 5.0,
              height: 1.0,
              weight: 1.0,
              inTime: '2023-05-08T10:39:36',
              outTime: null,
              status: 1,
              outBranch: {
                id: 2,
                city: '南京市',
              },
            },
          ],
          is_delete: false,
          is_available: false,
        },
      ]);
    });
  },
});
