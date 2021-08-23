import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; /*Importacion de formularios reactivos*/
import { HttpClientModule }from '@angular/common/http'; /*Módulo que nos permite trabajar con la librería http
                                                          y poder tener acceso a los servicios*/

import localeEs from '@angular/common/locales/es-PA'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent
  ],
  imports: [ /*Aquí van otros módulos de la aplicación, framework o módulos que se vayan importando*/
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], /*Aquí se inyectan los servicios a utilizar*/
  bootstrap: [AppComponent] /*Punto de partida de nuestra aplicación*/
})
export class AppModule { }
