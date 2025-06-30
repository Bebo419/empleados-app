import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-empleados',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-empleados.html',
  styleUrl: './lista-empleados.css'
})
export class ListaEmpleados implements OnInit{

  empleados: Empleado[] = [];

  nuevoEmpleado: Empleado = {
    Id: 0,
    Nombre: '',
    Correo: '',
    Telefono: '',
    FechaNacimiento: new Date(),
    Sexo: ''
  };

  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(): void {
      this.empleados = this.empleadoService.obtenerEmpleados();
  }

  agregarEmpleado(): void{
    this.empleadoService.agregarEmpleado(this.nuevoEmpleado);
    this.empleados = this.empleadoService.obtenerEmpleados();
    this.nuevoEmpleado = {
      Id: 0,
      Nombre: '',
      Correo: '',
      Telefono: '',
      FechaNacimiento: new Date(),
      Sexo: ''
    };
  }


  eliminarEmpleado(Id: number): void{
    this.empleadoService.eliminarEmpleado(Id);
    this.empleados = this.empleadoService.obtenerEmpleados();
  }
}
