import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioContentComponent } from './inventario-content/inventario-content.component';
import { ConsultaComponent } from './inventario-content/consulta/consulta.component';
import { ActualizarComponent } from './inventario-content/actualizar/actualizar.component';

const routes: Routes = [
  {
    path: '',
    component: InventarioContentComponent,
    children: [
      {
        path: 'consultar',
        component: ConsultaComponent,
      },
      {
        path: 'actualizar',
        component: ActualizarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
