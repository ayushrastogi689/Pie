const pieChart = document.querySelector(".piechart");

document.querySelector("#inputHandler").addEventListener("input", (e) => {
  const percentage = e.target.value;
  pieChart.style = `--percentage:${percentage}%`;
  percentageDisplay.textContent = `${percentage}%`;
});
