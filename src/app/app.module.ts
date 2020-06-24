import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArticulosFamiliasComponent } from './articulos-familias/articulos-familias.component';
import { InicioComponent } from './inicio/inicio.component';
import { MockArticulosFamiliasService } from './mock-articulos-familias.service';
import { ArticulosFamiliasService } from './articulos-familias.service';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { MockArticulosService } from './mock-articulos.service';  


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule,
   RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ])
 ],
  declarations: [ 
    AppComponent, HelloComponent, ArticulosFamiliasComponent, InicioComponent, MenuComponent, ArticulosComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [
    MockArticulosFamiliasService, ArticulosFamiliasService, 
    MockArticulosService,
    { provide: APP_BASE_HREF, useValue: "/"}]
})
export class AppModule { }
