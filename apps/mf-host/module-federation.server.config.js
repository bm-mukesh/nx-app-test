// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'mf-host',
  remotes: ['remote-app1', 'remote-app2'],
};

module.exports = moduleFederationConfig;
