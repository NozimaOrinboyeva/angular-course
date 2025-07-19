import { Component, inject, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarService } from '../serviecs/car.service';
import { Reservation } from '../models/reservation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [DatePipe],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
  standalone: true,
})
export class CarList  implements OnInit {
  reservationList: Reservation[] =[];
  reservetionService = inject(CarService);
   
  ngOnInit(): void {
    this.reservationList = this.reservetionService.getReservations();
  }
  

  ReservationList: any[]=[];
}
