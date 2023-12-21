/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @iceworks/best-practices/no-http-url */
import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import About from '@/components/about';
import Project from '@/components/project';
import Tags from '@/components/tags';
import Advance from '@/components/advance';
import Works from '@/components/works';
import Loading from '@/components/loading';
import axios from 'axios';
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
      await new Promise((res) => setTimeout(res, 1000));
      setSpin(false);
      store.tags = resList[0].data.data;
      store.projects = resList[1].data.data;
      store.advances = resList[2].data.data;
      setStore({
        ...store,
      });
    })();
  }, []);
  return spin ? (
    <Loading />
  ) : (
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
        render={() => {
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
        <a rel="noreferrer" href="https://beian.miit.gov.cn/" target="_blank">
          浙ICP备2023019046号-1
        </a>
      </div>
    </div>
  );
};
