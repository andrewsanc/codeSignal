// Description: Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc
// Link: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

// Example
// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
  const remainder = year % 100;
  const calculate = year / 100;
  return remainder !== 0 ? Math.floor(calculate) + 1 : calculate;
}
