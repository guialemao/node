const os = require('os');

setInterval(() => {
  const { freemem, totalmem } = os;

  const free = parseInt(freemem() / 1024 / 1024);
  const total = parseInt(totalmem() / 1024 / 1024);
  const percents = parseInt((free / total) * 100);

  const stats = {
    free: `${free} MB`,
    total: `${total} MB`,
    percents: `${percents}%`,
  }

  console.clear();
  console.log('==== MAC STATS ====')
  console.table(stats);
}, 1000);
