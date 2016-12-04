
module.exports = {
  'use': ['postcss-import', 'postcss-cssnext', 'postcss-focus', 'postcss-inline-svg', 'cssnano'],
  'input': './style.css',
  'output': './common.css',
  'local-plugins': true,
  'cssnano': {
    'discardComments': {
      'removeAll': true
    }
  },
/*  'postcss-pxtorem': {
    'rootValue': 16,
    'replace': true,
    'selectorBlackList': ['body', 'html']
  },*/
  /*'postcss-sprites': {
    'stylesheetPath': './dist/css',
    'spritePath': './dist/css/sprites',
    'basePath': './dist/images',
    filterBy: function(image) {
      // Allow only png files
      if (!/\.png$/.test(image.url)) {
        return Promise.reject();
      }
      return Promise.resolve();
    }
  },*/
/*  'postcss-font-magician': {
    'foundries': 'bootstrap google',
    'hosted': './dist/fonts'
  }*/
};