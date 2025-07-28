import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Product } from './24-dars/product/product';
import { ShoppingCard } from './25-dars/shopping-card/shopping-card';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    {path: '24-dars/product', component: Product},
    {path: '25-dars/shopping-card', component: ShoppingCard}
];
 