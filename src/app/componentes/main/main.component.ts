import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudades = ['Ciudad de Panamá','Arraiján','Penonomé','Chitré','Santiago'];

  constructor() { }

  ngOnInit(): void {
  }

}
