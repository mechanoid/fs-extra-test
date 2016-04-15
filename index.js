const fs = require('fs-extra');

fs.copy('t1', 't2', () => {
  console.log('finished');
})
