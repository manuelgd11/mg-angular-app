import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [], /*Aquí se inyectan los servicios a utilizar*/
  bootstrap: [AppComponent] /*Punto de partida de nuestra aplicación*/
})
export class AppModule { }
