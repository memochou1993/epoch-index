module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    '@next/next/no-title-in-document-head': 'off',
  },
};
