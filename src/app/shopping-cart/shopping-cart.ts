import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../services/cart.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-shopping-cart',
  imports: [MatCardModule, MatIconModule, MatButtonModule,CurrencyPipe],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  private cartService = inject(CartService);
  private cartSignal = signal<Cart[]>([]);

  cart = this.cartSignal.asReadonly();

  totalPrice = computed(() => 
  this.cart().reduce(
    (sum, item) => sum + item.product.price * item.quantity, 0 ));

  // cartList = toSignal(this.cartService.getCart(), {initialValue: [] });

  constructor() {
    this.loadCart();
    effect(() => {
      console.log('Cart updated:', this.cart());
    });
  }
  private loadCart() {
    this.cartService.getCart().subscribe({
      next: (data) => this.cartSignal.set(data),
    });
  }
}
