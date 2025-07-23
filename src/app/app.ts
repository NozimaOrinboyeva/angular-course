import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  imports: [CurrencyPipe],
})
export class App {
  price = signal(100);

  tax = computed(() => this.price() * 0.2);
  totalPrice = computed(() => this.price() + this.tax());

  applyDiscount(){
    const discount = this.price() * 0.1;
    this.price.set(this.price() - discount);
  }
}
