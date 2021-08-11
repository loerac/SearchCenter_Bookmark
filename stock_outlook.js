var ticker = prompt("Enter Ticker", "AAPL"); // Create browser prompt for ticker. Currently the links below definitely accept tickers - may accept names etc, but couldn't promise.

if (ticker != null & ticker.length > 0) { // Check that you actually put in a ticker. If you did open the following links. Includes SEC, marketwatch, seekingalpha, openinsider, twitter and moodys. You can almost certainly add more.
  window.open("https://tradytics.com/stocks-dashboard?ticker=" + ticker);
  window.open("https://tradytics.com/options-dashboard?ticker=" + ticker);
  window.open("https://tradytics.com/tradytics-dashboard?ticker=" + ticker);
  window.open("https://www.tradingview.com/chart/RLrYtDrc/?symbol=" + ticker);
  window.open("https://finbox.com/"+ ticker);
  window.open("https://stockcharts.com/h-sc/ui?s="+ ticker);
  window.open("https://www.reddit.com/r/MillennialBets/wiki/index/stocks/"+ticker);
  window.open("https://finviz.com/quote.ashx?t="+ ticker);
  window.open("https://twitter.com/search?q=%24"+ ticker);
  window.open("https://www.moodys.com/search?keyword="+ ticker +"&searchfrom=GS");
  window.open("https://whalewisdom.com/stock/"+ ticker);
} else { // Don't try and pull a fast one - would only result in homepage redirections or 404s.
  window.confirm("You didn't enter a ticker - that's not very cash money of you.");
}
