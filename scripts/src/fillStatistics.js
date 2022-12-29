import { formatDate } from "../utils/formatDate.js";

export function fillStatistics(stats) {
  let html = "";
  stats.forEach(stat => {
    html += `
    <tr>
      <td>${formatDate(stat.date)}</td>
      <td>${stat.points} points</td>
      <td>${stat.wpm} wpm</td>
      <td><img src="/assets/flags/${stat.lang.toLowerCase()}.svg" alt="${stat.lang}"></td>
      <td>${stat.words}</td>
    </tr>
    `;
  });

  return html;
}