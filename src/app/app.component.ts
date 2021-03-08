import { Component } from '@angular/core';
import { HousingLoan } from './loans/housing-loan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monthRate = 0;

  calculateRate(amount: string, years: string): void {
    if (!this.checkIfDataAreValid(amount, years)) {
      alert("Please provide correct data");
      this.monthRate = 0;
      return;
    }

    const housingLoan = new HousingLoan(Number(amount), Number(years));
    this.monthRate = housingLoan.getMonthRate();
  }

  private checkIfDataAreValid(amount: string, years: string): boolean {
    return (!isNaN(Number(amount)) && !isNaN(Number(years)))
  }
}
