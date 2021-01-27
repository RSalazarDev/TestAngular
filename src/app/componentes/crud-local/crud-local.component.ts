import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/clases/empresa';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {
notaNueva: Nota = new Nota()
notas: Nota[] = []
indice: number = 0
notaSeleccionada : Nota = new Nota()

empresaNueva: Empresa = new Empresa()
empresas: Empresa[]=[]
index: number = 0
empresaSeleccionada: Empresa = new Empresa()


  constructor() { }

  ngOnInit(): void {
    
    if(localStorage.getItem('crudLocal')!=null){
      this.notas = JSON.parse(localStorage.getItem('crudLocal'))
      this.indice = this.notas[this.notas.length-1].id+1
    }


    if(localStorage.getItem('crudLocal2')!=null){
      this.empresas = JSON.parse(localStorage.getItem('crudLocal2'))
      this.index = this.empresas[this.empresas.length-1].id+1
    }

  }
  
  insertarNota():void{
    this.notaNueva.id = this.indice
    this.indice++
    this.notas.push(this.notaNueva)
    this.notaNueva = new Nota()
    localStorage.setItem('crudLocal',JSON.stringify(this.notas))
  }

  editarNota(notaEntrada: Nota):void{

    for(let i in this.notas){
      if(notaEntrada.id==this.notas[i].id){
        this.notas[i] = notaEntrada
        localStorage.setItem('crudLocal',JSON.stringify(this.notas))
      }
    }
  }

  borrarNota(notaEntrada: Nota):void{

    for(let i in this.notas){
      if(notaEntrada.id==this.notas[i].id){
        this.notas.splice(parseInt(i),1)
        localStorage.setItem('crudLocal',JSON.stringify(this.notas))
      }
    }
  }


  insertarEmpresa():void{
      this.empresaNueva.id = this.index
      this.index++
      this.empresas.push(this.empresaNueva)
      this.empresaNueva = new Empresa()
      localStorage.setItem('crudLocal2',JSON.stringify(this.empresas))
    }
  
    editarEmpresa(empresaEntrada: Empresa):void{
  
      for(let i in this.empresas){
        if(empresaEntrada.id==this.empresas[i].id){
          this.empresas[i] = empresaEntrada
          localStorage.setItem('crudLocal2',JSON.stringify(this.empresas))
        }
      }

  }

  borrarEmpresa(empresaEntrada: Empresa):void{

    for(let i in this.empresas){
      if(empresaEntrada.id==this.empresas[i].id){
        this.empresas.splice(parseInt(i),1)
        localStorage.setItem('crudLocal2',JSON.stringify(this.empresas))
      }
    }
  }

  

    


  }


