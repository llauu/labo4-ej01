import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'primer-app';
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    this.suma = (this.edadUno + this.edadDos) / 1;
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}


class Usuario {
  nombre: string;
  clave: string;

  constructor(nombre: string, clave: string) {
    this.nombre = nombre;
    this.clave = clave;
  }
}