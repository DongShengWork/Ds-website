import { Timeline } from 'yl-design';

export default () => {
  return (
    <div className="works">
      <Timeline
        items={[
          {
            title: (
              <div>
                <h5>阿里拍卖 前端开发(React) 2021.04-2023.08</h5>
                <p>基于业务的发展，做技术储备和判断，在架构层面做好平衡</p>
                <p>使用工程化手段，解决了业务流程或者研发的逻辑问题，本质是提高效率和保证质量</p>
                <p>可视化拖拽表单搭建解决方案，通用组件库的搭建和维护</p>
                <p>把控团队代码质量，确保团队编码风格统一，团队相互code-review</p>
              </div>
            ),
          },
          {
            title: (
              <div>
                <h5>凡华能源科技 前端开发(React) 2020.07-2021.02</h5>
                <p>采用配置化解决方案，完成复杂的后端表单管理模块</p>
                <p>提供restful Api 在线开发能力，快速生成 CRUD 接口能力</p>
                <p>团队基础组件库建设</p>
              </div>
            ),
          },
          {
            title: (
              <div>
                <h5>浙江君嘉智享 前端开发(React) 2018.05-2020.06</h5>
                <p>技术转型，将原由的jquery项目，转型为 React 项目</p>
                <p>常规业务组件的封装，针对业务需求和后端协作定制接口数据模型</p>
              </div>
            ),
          },
        ]}
      />
      ;
    </div>
  );
};
