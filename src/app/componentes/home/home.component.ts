import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  variable:string = "Texto de prueba"

  constructor() { }

  ngOnInit(): void {
  }

  num1:number = 0
  num2:number = 0
  letras:string[] = ["a","b","c","d","e"]
  usuarios = [{nombre:"Paco", apellido:"Pil"},
              {nombre:"Aitor", apellido:"Tilla"},
              {nombre:"Daniel", apellido:"Muresan"}]

  usu = {nombre:"",apellido:""}
  mostrarUsuario(usuario) {
    this.usu = usuario
  }

}
