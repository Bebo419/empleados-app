import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleados: Empleado[] = [
    {
      Id: 1,
      Nombre: "Diego Ponce",
      Correo: "bebo@gmail.com",
      Telefono: "4778891214",
      FechaNacimiento: new Date("2003-09-25"),
      Sexo: "Masculino"
    },
    {
      Id: 2,
      Nombre: "Ana Torres",
      Correo: "ana@gmail.com",
      Telefono: "4778123214",
      FechaNacimiento: new Date("1990-05-10"),
      Sexo: "Femenino"
    },
  ];


  constructor() { }

  obtenerEmpleados(): Empleado[]{
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado): void {
  const maxId = this.empleados.length > 0 ? Math.max(...this.empleados.map(e => e.Id)) : 0;
  empleado.Id = maxId + 1;
  this.empleados.push({ ...empleado });
  }


  eliminarEmpleado(Id: number): void{
    this.empleados = this.empleados.filter(empleado => empleado.Id !== Id);
    }
  }

