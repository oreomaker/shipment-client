import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  mock: true,
  setup() {
    // submit
    Mock.mock(new RegExp('/api/orders'), () => {
      return successResponseWrap('ok');
    });
  },
});
