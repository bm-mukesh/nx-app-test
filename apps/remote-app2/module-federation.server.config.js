module.exports = {
  name: 'remote-app2',
  exposes: {
    './Module': 'apps/remote-app2/src/remote-entry.ts',
  },
};
