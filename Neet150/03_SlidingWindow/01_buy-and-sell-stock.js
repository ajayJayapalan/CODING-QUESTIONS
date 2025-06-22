/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [buyIndex, sellIndex, maxProfit] = [0, 1, 0];

  while (sellIndex < prices.length) {
    const profit = prices[sellIndex] - prices[buyIndex];
    if (profit <= 0) buyIndex = sellIndex;

    maxProfit = Math.max(profit, maxProfit);
    sellIndex++;
  }

  return maxProfit;
};
