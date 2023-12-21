import { Button, Carousel } from '@arco-design/web-react';
import { IconLaunch } from '@arco-design/web-react/icon';

export default ({ data = [] }) => {
  return (
    <Carousel
      showArrow="always"
      style={{ width: '50vw', height: '50vh' }}
      animation="fade"
    >
      {data.map((item: any) => {
        return (
          <div key={item.title} className="carousel-page">
            <div className="main">
              <div className="desc">
                <Button
                  type="primary"
                  onClick={() => {
                    window.open(item.href);
                  }}
                >
                  {item.title}
                  <IconLaunch style={{ marginLeft: 10 }} />
                </Button>
              </div>
              <img src={item.src} className="logo" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
