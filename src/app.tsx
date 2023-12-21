import { runApp } from 'lyr';
import Loading from '@/components/loading';

runApp({
  /** 节点 */
  element: '#root',
  /** loading */
  loading: () => <Loading />,
  /** 加载勾子 */
  getInitData: async () => {
    // 查询 userInfo 获取详细信息
    await new Promise((res) => setTimeout(res, 1000));
    return {
      auth: [],
      userInfo: {},
    };
  },
});
