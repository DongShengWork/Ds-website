import ReactFullpage from '@fullpage/react-fullpage';
import About from '@/component/about';
import Project from '@/component/project';
import Tags from '@/component/tags';
import Advance from '@/component/advance';
import Works from '@/component/works';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'yl-design';
import './index.less';

export default () => {
  const [spin, setSpin] = useState(true);
  const [store, setStore] = useState({
    tags: [],
    projects: [],
    advances: [],
  });
  useEffect(() => {
    (async () => {
      const resList = await Promise.all([
        axios.get('http://api-online.yunliang.cloud/website/tags'),
        axios.get('http://api-online.yunliang.cloud/website/projects'),
        axios.get('http://api-online.yunliang.cloud/website/advances'),
      ]);
      setSpin(false);
      store.tags = resList[0].data.data;
      store.projects = resList[1].data.data;
      store.advances = resList[2].data.data;
      setStore({
        ...store,
      });
    })();
  }, []);
  return (
    <Spin loading={spin}>
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
                  <Project data={store.projects} />
                </div>
                <div className="section">
                  <h1>相关技术栈</h1>
                  <Tags data={store.tags} />
                </div>
                <div className="section">
                  <h1>前端进阶导航</h1>
                  <Advance data={store.advances} />
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
    </Spin>
  );
};
