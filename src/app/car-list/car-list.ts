import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Data, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarService } from '../serviecs/car.service';
import { Reservation } from '../models/reservation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [DatePipe,RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
  standalone: true,
})
export class CarList  implements OnInit {
  reservationList: Reservation[] =[];
  reservetionService = inject(CarService);
  cdr = inject(ChangeDetectorRef);

  // constructor() {
  //   console.log(this.reservetionService.getReservations());
  // }
  ngOnInit(): void {
    this.loadReservations();
    // this.reservationList = this.reservetionService.getReservations();
  }


  loadReservations(): void{ 
    this.reservetionService.getReservations().subscribe({
       next: (data: Reservation[]) => {
        // console.log(data);
        this.reservationList = data;
        this.cdr.detectChanges();
       },
       error: (err) => {
        console.log(err);
       },
    });
  }

  deleteReservation(id: number): void {
    // this.reservetionService.deleteReservation(id);
    // this.reservationList = this.reservetionService.getReservations();
  }
  

  // ReservationList: any[]=[];
}
