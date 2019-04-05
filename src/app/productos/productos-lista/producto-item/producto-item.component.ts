import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/productos/Producto';
import { ProductosService } from '../../productos.service';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  constructor() { }

  @Input() producto: Producto[];
  @Input() car: Producto[];
  @Output() addCarrito = new EventEmitter();
  @Output() deleteCarrito = new EventEmitter();
  @Output() infoItem = new EventEmitter();

  ngOnInit() {
  }

  deleteItem() {
    this.deleteCarrito.emit(this.producto);
  }

  addItem() {
    this.addCarrito.emit(this.producto);
  }

  info() {
    this.infoItem.emit(this.producto);
  }



}
