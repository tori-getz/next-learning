/** @type {import('next').NextConfig} */

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

const withPlugins = require('next-compose-plugins');

dotenvLoad();

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: [ 'en', 'ru' ],
    defaultLocale: 'ru'
  }
};

const withNextEnv = nextEnv({
  staticPrefix: 'NEXT_',
  publicPrefix: 'NEXT_'
});

const plugins = [
  withNextEnv
];

module.exports = withPlugins(plugins, nextConfig);
