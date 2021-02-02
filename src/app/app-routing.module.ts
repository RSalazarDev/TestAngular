import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludorutaComponent } from './componentes/saludoruta/saludoruta.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
<<<<<<< HEAD
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
=======
import { RegistroComponent } from './componentes/registro/registro.component';
>>>>>>> b729d11 (SubidaDia02E)

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "saludoRutaDinamica/:nombre/:apellido", component:SaludorutaComponent},
  {path: "tuberia", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
<<<<<<< HEAD
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crud", component:CrudLocalComponent},
=======
  {path: "registro", component:RegistroComponent},
>>>>>>> b729d11 (SubidaDia02E)
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }