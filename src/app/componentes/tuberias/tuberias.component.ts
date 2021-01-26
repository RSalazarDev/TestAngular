import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string= "daniel muresan"
  mes: string= "Enero"
  texto: string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque nostrum harum distinctio repudiandae possimus laboriosam in sapiente? Amet quae alias soluta mollitia quis perferendis doloremque ea possimus iusto quisquam!"
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'en', 'entre']
  usuarios = [
    {nombre: "Ana", apellido: "Bortion", edad: 21},
    {nombre: "Sarah", apellido: "Connor", edad: 20},
    {nombre: "Daniel", apellido: "Muresan", edad: 17}
  ]
  numeroDni: number

  constructor() { }

  ngOnInit(): void {
  }

}
