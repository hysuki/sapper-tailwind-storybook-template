const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: [/\.stories\.js$/, /index\.js$/],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
