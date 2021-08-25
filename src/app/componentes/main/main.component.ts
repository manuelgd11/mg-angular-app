import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudades = ['Ciudad de Panamá','Arraiján','Penonomé','Chitré','Santiago'];
  verCiudad: boolean = true;
  cambiarCss: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  /*Método para alternar el valor de verCiudad dependiendo de una acción ejecutada*/
  mostrar(){this.verCiudad = !this.verCiudad;}
  cambioCss(){this.cambiarCss = !this.cambiarCss;}
}
