import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioContentComponent } from './inventario-content/inventario-content.component';
import { ActualizarComponent } from './inventario-content/actualizar/actualizar.component';
import { ConsultaComponent } from './inventario-content/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventarioContentComponent,
    ActualizarComponent,
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InventarioModule { }
