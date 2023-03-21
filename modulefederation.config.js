const deps = require('./package.json').dependencies;

const counterBaseURL =
  process.env.REACT_APP_COUNTER_BASE_URL || 'http://localhost:3001';

console.log('counterBaseURL', counterBaseURL);

module.exports = {
  name: 'container',
  exposes: {},
  filename: 'remoteEntry.js',
  remotes: {
    counter: `counter@${counterBaseURL}/remoteEntry.js`,
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
