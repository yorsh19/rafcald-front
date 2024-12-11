import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadChildren: () =>
      import('../../modules/principal/principal.module').then(
        (m) => m.PrincipalModule
      ),
  },
  {
    path: 'producto',
    loadChildren: () =>
      import('../../modules/productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'inventario',
    loadChildren: () =>
      import('../../modules/inventario/inventario.module').then((m) => m.InventarioModule),
  },
  /* {
    path: 'pedido',
    children: [
      {
        path: 'registro',
        loadChildren: () =>
          import('../../modules/pedi-registro/pedi-registro.module').then(
            (m) => m.PediRegistroModule
          ),
      },
      {
        path: 'consulta',
        loadChildren: () =>
          import('../../modules//pedi-consulta/pedi-consulta.module').then(
            (m) => m.PediConsultaModule
          ),
      },
      {
        path: 'estado',
        loadChildren: () =>
          import('../../modules//pedi-estado/pedi-estado.module').then(
            (m) => m.PediEstadoModule
          ),
      },
    ],
  },
  {
    path: 'inventario',
    children: [
      {
        path: 'consultar',
        loadChildren: () =>
          import('../../modules//inven-consultar/inven-consultar.module').then(
            (m) => m.InvenConsultarModule
          ),
      },
      {
        path: 'actualizar',
        loadChildren: () =>
          import('../../modules//inven-actualizar/inven-actualizar.module').then(
            (m) => m.InvenActualizarModule
          ),
      },
    ],
  },
  {
    path: 'produccion',
    children: [
      {
        path: 'agregar',
        loadChildren: () =>
          import('../../modules//produ-agregar/produ-agregar.module').then(
            (m) => m.ProduAgregarModule
          ),
      },
      {
        path: 'consultar',
        loadChildren: () =>
          import('../../modules//produ-consultar/produ-consultar.module').then(
            (m) => m.ProduConsultarModule
          ),
      },
    ],
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
