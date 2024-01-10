// default config
const isDev = think.env === 'development';

module.exports = {
  workers: 1,
  env: think.env,
  port: isDev ? 6801 : 6800,
  stickyCluster: true,
};
