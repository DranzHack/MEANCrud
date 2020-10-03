import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { FormularioempleadoComponent } from './components/formularioempleado/formularioempleado.component';
import { NavComponent } from './components/nav/nav.component';


const routes: Routes = [
  {path: '', redirectTo: 'empleados', pathMatch: 'full'},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'empleado/form', component: FormularioempleadoComponent },
  {path: 'empleado/form/:id',component:FormularioempleadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FormularioempleadoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
