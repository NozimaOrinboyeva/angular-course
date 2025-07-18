import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  imports: [ FormsModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarList  implements OnInit {
  ngOnInit(): void {
    // console.log('Saytga kirdi.') localda ishlashi 
    const savedCars = localStorage.getItem('cars');
    this.cars= savedCars ?   JSON.parse(savedCars): [];
  }
  carName: string = '';
  carYear: Date = new Date();

  cars: Car[] = [];

  
  // car: Car = {
  //   id: 1,
  //   name: 'Jentra',
  //   year: new Date('2025-06-07'),
  // };

  onSubmit(){

    if(this.carName.length != 0 && this.carYear) {
      const newCar: Car = {
        id: this.cars.length + 1,
        name: this.carName,
        year: this.carYear,
      };
      this.cars.push(newCar);
      this.carName = '';
      this.carYear = new Date();
      console.log(this.cars);
    }
    // console.log('Form submitted');
    // console.log('Car Name:', this.carName);
    // console.log('Car Year:', this.carYear);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter((c) => c.id ! == car.id);
  }

}
