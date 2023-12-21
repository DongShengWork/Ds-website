import { Tooltip } from "@arco-design/web-react";

export default ({
  data = []
}) => {
  return (
    <div className="app-advance">
      {data.map((menu: any) => {
        return (
          <Tooltip content={menu.title} position="top">
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
