import { runApp } from 'lyr';
import Loading from '@/components/loading';

runApp({
  /** 节点 */
  element: '#root',
  /** loading */
  loading: () => <Loading />,
  /** 加载勾子 */
  getInitData: async () => {
    return {
      auth: [],
      userInfo: {},
    };
  },
});
