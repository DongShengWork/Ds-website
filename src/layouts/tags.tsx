const tags = [
  {
    name: 'React',
  },
  {
    name: 'Es5/6',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'CSS3/Less',
  },
  {
    name: 'Mobx',
  },
  {
    name: 'Axios',
  },
  {
    name: 'Webpack/Vite',
  },
  {
    name: 'AntDesign',
  },
  {
    name: '组件库搭建',
  },
  {
    name: '低代码相关',
  },
  {
    name: 'Serverless',
  },
  {
    name: 'Node',
  },
  {
    name: 'Koa',
  },
  {
    name: 'Thinkjs',
  },
  {
    name: 'MySQL',
  },
  {
    name: 'RestFul',
  },
  {
    name: 'Git',
  },
  {
    name: 'Http',
  },
];

export default () => {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', width: '50vw' }}>
      {tags.map((tag) => {
        return (
          <div key={tag.name} className="my-tag">
            {tag.name}
          </div>
        );
      })}
    </div>
  );
};
