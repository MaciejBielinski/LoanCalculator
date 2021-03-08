export abstract class LoanBase {
    amount: number;
    years: number;
    interestRate: number;

    abstract getMonthRate(): number;
}