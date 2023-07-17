import { Tooltip } from "yl-design";

const menus = [
  {
    title: 'es6 入门',
    icon: 'https://lucifer.ren/fe-interview/assets/imgs/topics/js/js-cover.png',
    href: 'https://es6.ruanyifeng.com/',
  },
  {
    title: '前端进阶之旅',
    icon: 'https://interview.poetries.top/logo.png',
    href: 'https://interview.poetries.top/',
  },
  {
    title: 'React 技术揭秘',
    icon: 'https://api.iowen.cn/favicon/react.iamkasong.com.png',
    href: 'https://react.iamkasong.com/?ref=nav.poetries.top',
  },
  {
    title: '高级前端进阶',
    icon: 'http://resource.muyiy.cn/image/20200106214930.jpg',
    href: 'https://muyiy.cn/blog/',
  },
  {
    title: 'JavaScript 知识图谱',
    icon: 'https://tsejx.github.io/javascript-guidebook/favicon.ico',
    href: 'https://tsejx.github.io/javascript-guidebook/',
  },
  {
    title: 'web前端面试',
    icon: 'https://static.vue-js.com/b4b71a30-443b-11eb-85f6-6fac77c0c9b3.png',
    href: 'https://vue3js.cn/interview/',
  },
  {
    title: '前端面试宝典',
    icon: 'https://fe.ecool.fun/fe.ico',
    href: 'https://fe.ecool.fun/',
  },
  {
    title: '大前端面试宝典',
    icon: 'https://my-dev-ops.oss-cn-beijing.aliyuncs.com/website/12.png',
    href: 'https://lucifer.ren/fe-interview',
  },
  {
    title: '🔥 LeetCode',
    icon: 'https://my-dev-ops.oss-cn-beijing.aliyuncs.com/website/leetcode.png',
    href: 'https://leetcode.cn/leetbook/',
  },
  {
    title: 'Dumi',
    icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    href: 'https://v1.d.umijs.org/zh-CN',
  },
  {
    title: 'ice 飞冰',
    icon: 'https://my-dev-ops.oss-cn-beijing.aliyuncs.com/website/ice.png',
    href: 'https://v3.ice.work/docs/guide/start/',
  },
  {
    title: 'Umijs',
    icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    href: 'https://v3.umijs.org/zh-CN/docs',
  },
  {
    title: 'Ant-Design',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
    href: 'https://4x.ant.design/components/input-cn/',
  },
  {
    title: 'Tencent Serverless',
    icon: 'https://my-dev-ops.oss-cn-beijing.aliyuncs.com/website/sae%20Serverless%20%E5%BA%94%E7%94%A8%E5%BC%95%E6%93%8E.png',
    href: 'https://cn.serverless.com/framework/docs-getting-started',
  },
  {
    title: '前端导航',
    icon: 'http://nav.poetries.top/wp-content/uploads/2021/12/uugai.com_1638839145968.png',
    href: 'https://nav.poetries.top/',
    width: 100,
  },
  {
    title: '渡一web前端频道',
    icon: 'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_9321dc52690f420ebcf65becc161bbc7~c5_300x300.jpeg?from=2956013662',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAi2oukRVcHpgD-HbVdzsxE7tYykr91YuIKukR_X_Yy08EFWRQhRrECDF6FvbvT8Xa',
  },
  {
    title: '爪蛙教育',
    icon: 'https://wechatapppro-1252524126.file.myqcloud.com/applnzi6vl27059/image/b_u_621352b3cf8f6_pnR6LH8h/l0c8rt6o0xge.png',
    href: 'https://applnzi6vl27059.pc.xiaoe-tech.com/',
  },
];

export default () => {
  return (
    <div className="app-advance">
      {menus.map((menu) => {
        return (
          <Tooltip title={menu.title} placement="top" theme='dark'>
            <div
              key={menu.title}
              className="app-advance-item"
              onClick={() => {
                window.open(menu.href);
              }}
            >
              <img src={menu.icon} style={{ width: menu.width || 50, height: 50 }} />
              <span>{menu.title}</span>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
