import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string= "texto de prueba"
  num1: number = null
  usuarios = [
    {nombre: "Adrian", apellido: "Gomez"},
    {nombre: "Sara", apellido: "Connor"},
    {nombre: "Rodrigo", apellido: "Gonzalez"}
  ]
  usuarios2: Usuario[] =[
    {nombre: "Cristina", apellido: "López"},
    {nombre: "Ana", apellido: "Martin"},
    {nombre: "Anselmo", apellido: "García"}
  ]
  usuarioSel
  usuario3: Usuario = new Usuario("Raúl", "Salazar")
  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    console.log("Hasta lue")
  }
}
