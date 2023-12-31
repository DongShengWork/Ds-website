import { Button } from '@arco-design/web-react';

export default ({ data = [] }) => {
  return (
    <div className="app-advance">
      {data.map((menu: any) => {
        return (
          <Button
            key={menu.title}
            onClick={() => {
              window.open(menu.href);
            }}
          >
            {menu.title}
          </Button>
        );
      })}
    </div>
  );
};
