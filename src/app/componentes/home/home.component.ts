import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  variable:string = "Texto de prueba"

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert("Hasta lue")
  }
  num1:number = 0
  num2:number = 0
  letras:string[] = ["a","b","c","d","e"]
  usuarios = [{nombre:"Paco", apellido:"Pil"},
              {nombre:"Aitor", apellido:"Tilla"},
              {nombre:"Daniel", apellido:"Muresan"}]
  
  usuarios2: Usuario[] = [{nombre:"Paco", apellido:"Pil"},
              {nombre:"Aitor", apellido:"Tilla"},
              {nombre:"Daniel", apellido:"Muresan"}]

  usuario3: Usuario = new Usuario("Raul","Salazar")

  usu = {nombre:"",apellido:""}
  mostrarUsuario(usuario) {
    this.usu = usuario
  }

}
