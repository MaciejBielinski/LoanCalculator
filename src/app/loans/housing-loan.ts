import { LoanBase } from "./loan-base";

export class HousingLoan extends LoanBase {
    constructor(amount: number, years: number) {
        super();
        this.interestRate = 0.035;
        this.amount = amount;
        this.years = years;
    }

    getMonthRate(): number {
        const totalToPay = this.getTotalToPay();
        debugger;
        const rate = totalToPay / this.getNumberOfRates();
        return rate;
    }

    private getTotalToPay(): number {
        return this.amount + (this.amount * this.interestRate * this.years);
    }

    private getNumberOfRates(): number {
        return this.years * 12;
    }
}