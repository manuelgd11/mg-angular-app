import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'c59a6f3aa88e52e08cf7dd9ca9b0cbce';

@Injectable({
  /*Provider de servicio*/
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { } /*Uso de la clase httpclient*/
  /*Método que permite obtener el tiempo, recibirá 2 parámetros: ciudad y código*/
  getEstadoTiempo(ciudad: string, codigo: string){
  /*Declaracion de url para poder hacer el consumo del servicio*/
  const url = `${urlBase}?q=${ciudad}, ${codigo}&appid=${appId}`;
  /*Genero la petición http que devuelve un observable*/
  return this.http.get(url);
  }
}
