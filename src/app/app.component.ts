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
    const housingLoan = new HousingLoan(Number(amount), Number(years));
    this.monthRate = housingLoan.getMonthRate();
  }
}
