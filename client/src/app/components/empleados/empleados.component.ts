import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import {  Empleados } from '../../models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados: Empleados[];
  //public empleado: Empleados = new Empleados(); 
  
  constructor(public empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleadosArr();
  } 

  getEmpleadosArr(){
    this.empleadosService.getEmpleadosArray().subscribe(
      res => {
        this.empleados = res["data"];
      },
      err => console.log(err)
    )
  }
/*
  agregarEmpleado(){
    //console.log(this.empleado);
    this.empleadosService.crearEmpleados(this.empleado).subscribe(
      res => {
        this.getEmpleadosArr();
        
        
      },
      err => console.log(err)
    )
  }
*/
  deleteEmpleado(empleado: Empleados): void{

    //console.log(empleado._id);
    if(confirm(`Esta Seguro que quiere Eliminar al Empleado ${empleado.nombre}`)){
      //console.log("Se eliminara Xd")
      this.empleadosService.eliminarEmpleado(empleado._id).subscribe(
        res => {
          this.getEmpleadosArr();
        },
        err => {console.log(err)}
      )
    }
    

  }

}
