import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

materialList: any[] = [];

material: any = {
  codigo: '',
  nombre: '',
  cantidad: 0,
  descripcion: '',
  costo: 0,
  unidad: '',
  ubicacion: ''
};

proveedor: any = {
  codigo: '',
  nombre: '',
  apellidos: '',
  dni: '',
  direccion: '',
  telefono: '',
  correo: ''
};

  constructor() { }

  ngOnInit(): void {
  }

  agregarMaterial() {
    this.materialList.push({ ...this.material });
    this.material = {
      codigo: '',
      nombre: '',
      cantidad: 0,
      descripcion: '',
      costo: 0,
      unidad: '',
      ubicacion: ''
    };
    console.log("materialList: ", this.materialList)
  }

  vaciarListado() {
    this.materialList = [];
  }

  registrarProveedor() {
    console.log('Proveedor registrado:', this.proveedor);
  }

  limpiarProveedor() {
    this.proveedor = {
      codigo: '',
      nombre: '',
      apellidos: '',
      dni: '',
      direccion: '',
      telefono: '',
      correo: ''
    };
  }
}
