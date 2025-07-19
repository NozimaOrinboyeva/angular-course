import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private reservations: Reservation[] =[];

  getReservations(): Reservation[] {
    return this.reservations;
  }  

  getReservationById(id: number): Reservation | undefined {
    return this.reservations.find((reservation) => reservation.id === id);
  }
  
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(
      (reservation) => reservation.id !== id
    );
  }

  updateReservation(updateReservation: Reservation): void {
    const index = this.reservations.findIndex(
      (reservation) => reservation.id === updateReservation.id
    );
    if(index !== -1 ) {
      this.reservations[index] = updateReservation
    }
  }
}
