// U78784426
// main.js

import { calculateInterest } from './modules/interestRate.js';
import { calculateLoanPayment } from './modules/loanPayment.js';
import { calculateInvestmentReturn } from './modules/investmentReturn.js';

function validateInputs(inputs) {
    for (let input of inputs) {
        if (isNaN(input) || input === '') {
            return false;
        }
    }
    return true;}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculate-interest').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('interest-principal').value);
        const rate = parseFloat(document.getElementById('interest-rate').value);
        const time = parseFloat(document.getElementById('interest-time').value);
        
        if (!validateInputs([principal, rate, time])) {
            alert('Please enter valid number for all fields.');
            return; }

        const result = calculateInterest(principal, rate, time);
        document.getElementById('interest-result').innerText = `Interest: ${result}`;
    });

    document.getElementById('calculate-loan').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('loan-principal').value);
        const rate = parseFloat(document.getElementById('loan-rate').value) / 100;
        const numberOfPayments = parseFloat(document.getElementById('loan-payments').value);
        
        if (!validateInputs([principal, rate, numberOfPayments])) {
            alert('Please enter valid number for all fields.');
            return;}

        const result = calculateLoanPayment(principal, rate, numberOfPayments);
        document.getElementById('loan-result').innerText = `Monthly Payment: ${result}`;});

    document.getElementById('calculate-investment').addEventListener('click', () => {
        const principal = parseFloat(document.getElementById('investment-principal').value);
        const rate = parseFloat(document.getElementById('investment-rate').value) / 100;
        const timesCompounded = parseFloat(document.getElementById('investment-times-compounded').value);
        const years = parseFloat(document.getElementById('investment-years').value);
        
        if (!validateInputs([principal, rate, timesCompounded, years])) {
            alert('Please enter valid number for all fields.');
            return;}

        const result = calculateInvestmentReturn(principal, rate, timesCompounded, years);
        document.getElementById('investment-result').innerText = `Future Value: ${result}`;});
});