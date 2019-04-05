import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cambiaDato = new Subject<Producto[]>();

  productos: Producto[] = [
    new Producto(1, 'Hielo', 'Aguitas', 'Item', 18, 50),
    new Producto(2, 'Cuaderno', 'Excribe', 'Papeleria', 89, 20),
    new Producto(3, 'Corrector', 'Papermate', 'Papeleria', 12, 120),
    new Producto(4, 'Chicle de fresa', 'Bubalo', 'Dulceria', 2, 345),
    new Producto(5, 'Guantes', 'MSI', 'Abarrotes', 89, 52),
    new Producto(6, 'Lapiz ', 'Bic', 'Papeleria', 1, 148),
    new Producto(7, 'Lechuguilla', 'Agave Feliz', 'Bebida', 1500, 6),
  ];

  carrito = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  addCarrito(producto: Producto) {
    if (!this.carrito.includes(producto)) {
      this.carrito.push(Object.assign({}, producto));
      this.notificarCambios();
    }
  }

  borrarCarrito(id: number): boolean {
    const pos = this.carrito.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambios();
      return true;
    }
    return false;
  }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

}
