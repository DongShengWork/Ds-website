// default config
const isDev = think.env === 'development';

module.exports = {
  workers: 1,
  env: think.env,
  port: isDev ? 6901 : 6900,
  stickyCluster: true,
};
