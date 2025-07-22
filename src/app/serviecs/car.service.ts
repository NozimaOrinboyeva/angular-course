import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private reservations: Reservation[] =[];
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  // constructor() {
  //   const savedReservations = localStorage.getItem('reservations');
  //   this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  // }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`)
  }  

  getReservationById(id: number): Observable<Reservation>  {
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }
  
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }
  

  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(
      (reservation) => reservation.id !== id
    );
    const savedReservations = localStorage.getItem('reservations');
  }

  updateReservation(id: number, updatedReservation: Reservation): void {
    this.reservations = this.reservations.map((item) => {
      if(item.id === id) {
        return updatedReservation;
      }
      return item;
    });
    const savedReservations = localStorage.getItem('reservations');
  }
}
