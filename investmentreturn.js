// U78784426
// modules/investmentReturn.js
export function calculateInvestmentReturn(principal, rate, timesCompounded, years) {
    return principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
}
