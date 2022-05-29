const ghpages = require('gh-pages');

ghpages.publish('build', {
  repo: 'git@github.com:tzynwang/mui-daisy-theme-demo-20220529.git',
  remote: 'demo20220529',
  add: true
});
