import { Carousel } from '@arco-design/web-react';

export default ({ data = [] }) => {
  return (
    <Carousel showArrow="always" style={{ width: '50vw', height: '50vh' }}>
      {data.map((item: any) => {
        return (
          <div key={item.title} className="carousel-page">
            <div className="main">
              <div className="desc">
                <a href={item.href} target="_blank">
                  {item.title}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <svg
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="7821"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z"
                      p-id="7822"
                      fill="#fff"
                    ></path>
                    <path
                      d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z"
                      p-id="7823"
                      fill="#fff"
                    ></path>
                    <path
                      d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z"
                      p-id="7824"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
              </div>
              <img src={item.src} className="logo" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
