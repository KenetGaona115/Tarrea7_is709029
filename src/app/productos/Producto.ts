export class Producto {

    constructor(
        public id: number,
        public nombre: string,
        public marca: string,
        public categoria: string,
        public precio: number,
        public existencia: number
    ) { }
}
