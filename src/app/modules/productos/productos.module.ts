import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosContentComponent } from './productos-content/productos-content.component';
import { AgregarComponent } from './productos-content/agregar/agregar.component';
import { ConsultarComponent } from './productos-content/consultar/consultar.component';


@NgModule({
  declarations: [
    ProductosContentComponent,
    AgregarComponent,
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
