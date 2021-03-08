import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calculateRate(amount: number, years: number): void {
    console.log(amount);
    console.log(years);
  }
}
