// U78784426
// modules/loanPayment.js

export function calculateLoanPayment(principal, annualRate, numberOfPayments) {
    const monthlyRate = annualRate / 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}