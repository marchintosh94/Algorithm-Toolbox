const max = require('./max_pairwise_product.js');

(() => {
  //misure CPU time spent in the current process
  console.time('CPU time');
  const cpuUsage = process.cpuUsage();
  let i = 0;
  const arr = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));
  while (i < 10000000) {
    max(arr);
    i++;
  }
  console.timeEnd('CPU time');
  const { user, system } = process.cpuUsage(cpuUsage);
  console.log(`User CPU time: ${(user / 1000000).toFixed(3)} seconds`);
  console.log(`System CPU time: ${(system / 1000000).toFixed(3)} seconds`);
  console.log('========\n');
  process.exit();
})();