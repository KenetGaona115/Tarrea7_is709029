import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[];
  carrito: Producto[];

  subscript: Subscription;

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.carrito = this.productoService.getCarrito();
    this.subscript = this.productoService.cambiaDato.subscribe(
      (arrayCarrito: Producto[]) => {
        this.carrito = arrayCarrito;
      }
    )
  }

}
