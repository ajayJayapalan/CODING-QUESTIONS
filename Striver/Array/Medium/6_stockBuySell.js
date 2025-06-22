const stockBuySell = (stocks) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  let i = 0;
  while (i < stocks.length) {
    if (minPrice >= stocks[i]) {
      minPrice = stocks[i];
    }

    let profit = stocks[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);

    i++;
  }

  return maxProfit;
};

const stocks = [7, 1, 5, 3, 6, 0, 2];
const output = stockBuySell(stocks);
console.log({ output });
