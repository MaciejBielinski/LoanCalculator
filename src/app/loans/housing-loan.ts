import { LoanBase } from "./loan-base";

export class HousingLoan extends LoanBase {
    calculateMonthRate(): number {
        throw new Error("Method not implemented.");
    }
}