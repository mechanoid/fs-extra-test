const fs = require('fs-extra')

fs.copy('t1', 't2', { clobber: false }, () => {
  console.log('finished');
})
