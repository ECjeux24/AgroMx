import { CardImage } from "../card-image/CardImage.js";



class ProductCard {

    constructor(id, nombre, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.imagen = new CardImage(imagen, nombre);
    }

    // Método para generar el HTML de la tarjeta
    generateHTML() {
        return `
            <div class="col-12 col-md-6 col-lg-4 p-2">
                <div class="card h-100" > 
                    <figure class="p-1" >                   
                        <img src="${this.imagen.getImageUrl()}" class="card-img-top product-img" alt="${this.imagen.descripcion}">
                    <figure> 
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${this.nombre}" class="card-nombre">
                            ${this.nombre.length > 50 ? this.nombre.substring(0,47)+"..." : this.nombre }
                            </h5>
                        </div>
                        <div class="card-description-container my-2">
                            <p title="${this.descripcion}" class="card-text">
                            ${this.descripcion.length > 70 ? this.descripcion.substring(0,67)+"..." :  this.description }
                            </p>                            
                        </div>
                        <p class="card-text"><strong>Precio: $${this.precio}</strong></p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Agregar a la canasta</a>
                    </div>
                </div>
            </div>
        `;
    }



}

export { ProductCard }