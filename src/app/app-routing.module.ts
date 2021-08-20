import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';/*Importacion de modulos y clases para poder trabajar con las rutas*/
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

/*Constante que contiene todas las rutas de la aplicación*/
const routes: Routes = [
   /*Arreglo que contiene todas las rutas de la aplicación*/
   {path: 'main', /*Nombre de la ruta(declaración) a cuál vamos a acceder*/
          component: MainComponent /*Componente al que se hace referencia con la ruta main*/},
          {path: 'tiempo', component: TiempoComponent},
   /*Configuraciones por defecto para que cuando el usuario no coloque ninguna ruta en específico, la aplicación
   vaya a un componente por defecto (para todos los path)*/
   {path: '', redirectTo: 'main', pathMatch: 'full'},
   /*Configuracion para que cuando el usuario coloque cualquier path en la url, se llame al componente principal*/
   {path: '**', component: MainComponent}
]

@NgModule({
  imports: [
    /*Configuracion/Importacion que define cual será nuestro archivo de ruta principal*/
    RouterModule.forRoot(routes)
  ],
    /*Aquí se define que esta configuracion debe ser visible para la aplicación (si no, no se aplica)*/
    exports: [ RouterModule ]
})
export class AppRoutingModule { } /*Este archivo debe ser importado/referenciado en 'app.module.ts'*/
