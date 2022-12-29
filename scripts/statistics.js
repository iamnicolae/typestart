import { localDB } from "./utils/localDB.js";
import { statisticsTable, highscoreTable } from "./utils/querySelectors.js";
import { fillStatistics } from "./src/fillStatistics.js";
import { getMaxScore } from "./utils/getMaxScore.js";

(() => {

  const statistics = localDB.get.reverse();

  highscoreTable.innerHTML = fillStatistics(getMaxScore(statistics));
  statisticsTable.innerHTML = fillStatistics(statistics);

})();