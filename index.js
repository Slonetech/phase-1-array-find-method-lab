// code your solution here
const gameRecord = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(gameRecords) {
    const winRecord = gameRecords.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
