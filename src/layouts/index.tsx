import ReactFullpage from '@fullpage/react-fullpage';
import About from '@/component/about';
import Project from '@/component/project';
import Tags from '@/component/tags';
import Advance from '@/component/advance';
import Works from '@/component/works';
import './index.less';

export default () => {
  return (
    <div className="app-pages">
      <ReactFullpage
        credits={{
          enabled: false,
        }}
        scrollingSpeed={600}
        navigation
        verticalCentered
        controlArrows
        anchors={['about', 'my-works', 'my-project', 'my-points', 'advance']}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <h1>关于我</h1>
                <About />
              </div>
              <div className="section">
                <h1>工作经验</h1>
                <Works />
              </div>
              <div className="section">
                <h1>相关作品集合</h1>
                <Project />
              </div>
              <div className="section">
                <h1>相关技术栈</h1>
                <Tags />
              </div>
              <div className="section">
                <h1>前端进阶导航</h1>
                <Advance />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <div className="beian">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          浙ICP备2023019046号-1
        </a>
      </div>
    </div>
  );
};
