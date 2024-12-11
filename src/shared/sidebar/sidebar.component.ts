import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuItems = [
    {
      name: 'Principal',
      icon: 'uil uil-estate',
      router: '/principal',
      open: false,
      submenu: null,
    },
    {
      name: 'Producto',
      icon: 'uil uil-bag',
      router: null,
      open: false,
      submenu: [
        {
          name: 'Consultar',
          icon: 'uil-edit',
          router: 'producto/consultar',
        },
        {
          name: 'Agregar',
          icon: 'uil-search',
          router: 'producto/agregar',
        },
      ],
    },
    {
      name: 'Pedido',
      icon: 'uil-shopping-cart-alt',
      router: null,
      open: false,
      submenu: [
        { name: 'Registro', icon: 'uil-copy', router: '/pedido/registro' },
        { name: 'Consulta', icon: 'uil-search', router: '/pedido/consulta' },
        { name: 'Estado', icon: 'uil-check', router: '/pedido/estado' },
      ],
    },
    {
      name: 'Inventario',
      icon: 'uil-align-left-justify',
      router: null,
      open: false,
      submenu: [
        {
          name: 'Consultar',
          icon: 'uil-edit',
          router: '/inventario/consultar',
        },
        {
          name: 'Actualizar',
          icon: 'uil-search',
          router: '/inventario/actualizar',
        },
      ],
    },
    {
      name: 'Producción',
      icon: 'uil-chart-line',
      router: null,
      open: false,
      submenu: [
        { name: 'Agregar', icon: 'uil-edit', router: '/produccion/agregar' },
        {
          name: 'Consultar',
          icon: 'uil-search',
          router: '/produccion/consultar',
        },
      ],
    },
  ];

  toggleSubmenu(selectedItem: any): void {
    this.menuItems.forEach((item) => {
      if (item !== selectedItem) {
        item.open = false;
      }
    });

    selectedItem.open = !selectedItem.open;
  }
}
