const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const baseDir = path.resolve(__dirname, '.');
const rootDir = path.resolve(baseDir, '..');
const itcssDir = path.resolve(rootDir, 'BEM_ITCSS');
const distFile = path.resolve(itcssDir, 'dist.css');

sass.render(
  {
    file: path.resolve(itcssDir, 'styles/index.scss')
  },
  function(err, result) {
    if (err) {
      console.error('############# SASS BUILD ERROR #############');
      console.error(err);
      return;
    }
    console.error('############# SASS BUILD SUCCESS #############');
    fs.writeFile(distFile, result.css, function(err) {
      if (!err) {
        //file written on disk
      }
    });
  }
);
