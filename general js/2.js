const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500},
  {"name":"Jenny","salary":2500}
];

const getWorthyWorker = (workersToCompare) => {
  const WorthyWorker = [];

  workersToCompare.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      WorthyWorker.push(currentWorker.name)
    }
  })

  return WorthyWorker;
}
console.log(getWorthyWorker(workers));