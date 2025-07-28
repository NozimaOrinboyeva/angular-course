import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shopping-card',
  imports: [MatIconModule,MatButtonModule,MatCardModule ],
  templateUrl: './shopping-card.html',
  styleUrl: './shopping-card.css'
})
export class ShoppingCard {

}
