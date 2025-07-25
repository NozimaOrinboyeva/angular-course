import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Product } from './23-dars/product/product';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    {path: '23-dars/product', component: Product}
];
 