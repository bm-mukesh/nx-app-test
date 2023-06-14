module.exports = {
  name: 'remote-app1',
  exposes: {
    './Module': 'apps/remote-app1/src/remote-entry.ts',
  },
};
