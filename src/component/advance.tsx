import { Tooltip } from 'yl-design';

export default ({
  data = []
}) => {
  return (
    <div className="app-advance">
      {data.map((menu: any) => {
        return (
          <Tooltip title={menu.title} placement="top" theme="dark">
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
