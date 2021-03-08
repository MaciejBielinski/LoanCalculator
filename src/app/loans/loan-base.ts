export abstract class LoanBase {
    amount: number;
    years: number;

    abstract calculateMonthRate(): number;
}