import { LoanBase } from "./loan-base";

export class HousingLoan extends LoanBase {
    constructor() {
        super();
        this.interestRate = 0.035;
    }

    getMonthRate(): number {
        const totalToPay = this.getTotalToPay();
        const rate = totalToPay / this.getNumberOfRates();
        return rate;
    }

    private getTotalToPay() {
        return this.amount + (this.amount * this.interestRate * this.years);
    }

    private getNumberOfRates() {
        return this.years * 12;
    }
}