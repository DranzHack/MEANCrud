import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  URL_API = 'http://localhost:4000'

  

  constructor(private http:HttpClient) { }


  getEmpleadosArray(){
    return this.http.get<Empleados[]>(`${this.URL_API}/mostrar-empleados`);
  }

  getOneCmpleado(_id: string){
    return this.http.get(`${this.URL_API}/mostrar-empleado/${_id}`);
  }
  
  crearEmpleados(empleado: Empleados){
    return this.http.post(`${this.URL_API}/crear-emplado`,empleado);
  }

  actualizarEmpleado(empleado: Empleados){
    return this.http.put(`${this.URL_API}/editar-empleado/${empleado._id}`,empleado);
  }

  eliminarEmpleado(_id: string){
    return this.http.delete(`${this.URL_API}/borrar-empleado/${_id}`);
  }
}
