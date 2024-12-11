import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosContentComponent } from './pedidos-content/pedidos-content.component';
import { ConsultaComponent } from './pedidos-content/consulta/consulta.component';
import { EstadoComponent } from './pedidos-content/estado/estado.component';
import { RegistroComponent } from './pedidos-content/registro/registro.component';


@NgModule({
  declarations: [
    PedidosContentComponent,
    ConsultaComponent,
    EstadoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
