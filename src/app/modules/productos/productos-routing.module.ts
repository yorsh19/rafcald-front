import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosContentComponent } from './productos-content/productos-content.component';
import { AgregarComponent } from './productos-content/agregar/agregar.component';
import { ConsultarComponent } from './productos-content/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosContentComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'consultar',
        component: ConsultarComponent,
      },
      { path: '', redirectTo: 'consultar', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
