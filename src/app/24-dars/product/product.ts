import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrouncatePipe } from '../../pipes/trouncate-pipe';
import { CartService } from '../../services/cart.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  imports: [MatCardModule,MatGridListModule,TrouncatePipe,MatSnackBarModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
})
export class Product {
  productService = inject(ProductService);
  @Input() item!: Product;
  private cartService = inject(CartService);
  private _snackBar = inject(MatSnackBar)

  addCart(product: Product):  void{
    const cartItem = {
    product, quantity: 1 };
    this.cartService.addToCart(cartItem).subscribe({
      next: () =>  this._snackBar.open('Product added to cart'),
    });
  }

  product = toSignal(this.productService.getProducts(),{
    initialValue: [],
  });
}
