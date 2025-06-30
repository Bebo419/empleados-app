import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleados } from './components/lista-empleados/lista-empleados';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaEmpleados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'empleados-app';
}
