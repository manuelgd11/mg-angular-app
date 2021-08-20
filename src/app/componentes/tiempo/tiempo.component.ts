import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/servicios/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup; /*Declaración de objeto formulario*/
  /*Variables para almacenar la respuesta del servicio o api del tiempo*/
  estado_tiempo: any;
  nombre: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;

  /*Inyeccion de clase formbuilder en el constructor que permite hacer una serie de acciones 
  en este formulario, como validaciones, match y controlar cada uno de los campos del formulario*/
  constructor(private fb: FormBuilder, private tiempo: TemperaturaService) { /*Es importante siempre 
  declarar/inyectar clases/servicios a utilizar en el constructor*/

  /*Para hacer referencia un método o variable desde otro método u otro constructor se usa 
  la palabra reservada "this"*/
  this.iniciarFormulario();
  }

  ngOnInit(): void {
  }
  /*Declaracion del método para crear o iniciar un formulario*/
  iniciarFormulario(){

    /*Iniciamos el formulario y lo instanciamos para que sea igual formbuilder para usar el
    método formGroup que permite agrupar los distintos controles que tenga el formulario*/
    this.formulario = this.fb.group({
      /*Declaracion de objeto json*/
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], /*Clase "Validator" que implementa validaciones 
      comunes que se pueden hacer a cualquier campo*/
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }
  /*Este método consumirá el servicio de Temperatura*/
  consultar(){
    console.log("Formulario: ", this.formulario);
    /*Llamamos al método getEstadoTiempo que recibe 2 parámetros desde el formulario*/
    this.tiempo.getEstadoTiempo(this.formulario.controls.ciudad.value, this.formulario.controls.codigo.value)
    /*Me suscribo para acceder al observable retornado por el método que contiene la respuesta e 
    información necesaria*/.subscribe(respuesta =>{
        this.estado_tiempo = respuesta;
        this.nombre = this.estado_tiempo.name;
        this.temperatura = this. estado_tiempo.main.temp;
        this.humedad = this.estado_tiempo.main.humidity;
        this.latitud = this.estado_tiempo.coord.lat;
        this.longitud = this.estado_tiempo.coord.lon;
        this.descripcion = this.estado_tiempo.weather[0].description;
        console.log("respuesta", respuesta);
    });
  }
}