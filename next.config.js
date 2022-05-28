/** @type {import('next').NextConfig} */

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const { withEffectorReactAliases } = require("effector-next/tools");

const withPlugins = require('next-compose-plugins');

dotenvLoad();

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [ 'en', 'ru' ],
    defaultLocale: 'ru'
  }
};

const withNextEnv = nextEnv({
  staticPrefix: 'NEXT_',
  publicPrefix: 'NEXT_'
});

const enhance = withEffectorReactAliases();

const plugins = [
  withNextEnv,
  enhance
];

module.exports = withPlugins(plugins, nextConfig);
