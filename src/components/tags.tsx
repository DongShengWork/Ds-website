import { Button } from '@arco-design/web-react';

export default ({ data = [] }) => {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', width: '50vw' }}>
      {data.map((tag: any) => {
        return <Button type="outline" key={tag.name}>{tag.name}</Button>;
      })}
    </div>
  );
};
