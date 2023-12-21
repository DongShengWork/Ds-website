import { Timeline } from '@arco-design/web-react';

export default () => {
  return (
    <div className="works">
      <Timeline>
        <Timeline.Item label="SHEIN 前端开发(React) 2023.09-至今">
          <p>团队核心项目维护迭代，封装相关业务组件，和工具库</p>
          <p>使用工程化手段，自研脚手架，实现提高开发效率的成果</p>
        </Timeline.Item>
        <Timeline.Item label="阿里拍卖 前端开发(React) 2021.04-2023.08">
          <p>基于业务的发展，做技术储备和判断，在架构层面做好平衡</p>
          <p>
            使用工程化手段，解决了业务流程或者研发的逻辑问题，本质是提高效率和保证质量
          </p>
          <p>可视化拖拽表单搭建解决方案，通用组件库的搭建和维护</p>
          <p>把控团队代码质量，确保团队编码风格统一，团队相互code-review</p>
        </Timeline.Item>
        <Timeline.Item label="凡华能源科技 前端开发(React) 2020.07-2021.02">
          <p>技术转型，将原由的jquery项目，转型为 React 项目</p>
          <p>常规业务组件的封装，针对业务需求和后端协作定制接口数据模型</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
