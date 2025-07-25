import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrouncatePipe } from '../../pipes/trouncate-pipe';

@Component({
  selector: 'app-product',
  imports: [MatCardModule,MatGridListModule,TrouncatePipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
})
export class Product {
  productService = inject(ProductService);

  product = toSignal(this.productService.getProducts(),{
    initialValue: [],
  });
}
