import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = '';
  paymentDate: string = '';
  amount: number = 0;
  miles: number = 0;

  onNameChange(event: Event): string {
    this.name = (event.target as HTMLInputElement).value;
    return this.name;
  }

  onDateChange(event: Event): string {
    this.paymentDate = (event.target as HTMLInputElement).value;
    return this.paymentDate;
  }

  onAmountChange(event: Event): string {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
    return this.amount.toString();
  }

  onMilesChange(event: Event): string {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
    return this.miles.toString();
  }


}
