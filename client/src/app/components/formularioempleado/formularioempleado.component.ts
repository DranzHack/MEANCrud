import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleados } from '../../models/empleados';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-formularioempleado',
  templateUrl: './formularioempleado.component.html',
  styleUrls: ['./formularioempleado.component.css']
})
export class FormularioempleadoComponent implements OnInit {

  public empleado: Empleados = new Empleados();
  constructor(private serviceEmpleados: EmpleadosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente():void{
    this.activatedRouter.params.subscribe(params => {
      let id  = params['id'];
      if(id){
        this.serviceEmpleados.getOneCmpleado(id).subscribe((empleado) => this.empleado = empleado["data"]);
      }
    })
  }

  agregarEmpleado(){
    //console.log(this.empleado);
    this.serviceEmpleados.crearEmpleados(this.empleado).subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
  actualizarEmpleado(){
    //console.log(this.empleado);
    this.serviceEmpleados.actualizarEmpleado(this.empleado).subscribe(
      res => {
        this.router.navigate(['/'])
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

}
