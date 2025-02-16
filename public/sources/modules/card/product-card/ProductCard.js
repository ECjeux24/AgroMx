import { CardImage } from "/public/sources/modules/card/card-image/CardImage.js";
//FIXME: 

class ProductCard {

  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    //!FIXME: tratar el atributo descrpcion : no mostrar en el HTML
    this.imagen = new CardImage(imagen, nombre);
  }
  //? Método para generar el HTML de la tarjeta

  generateHTML() {
    return `
            <div class="d-flex col-md-2 col-lg-2 p-2">
                <div class="card h-60" > 
                    <figure class="p-1" >                   
                        <img src="${this.imagen.getImageUrl()}" class="card-img-top product-img img-thumbnail" alt="${this.imagen.description}">
                    <figure> 
                    <div class="card-body">
                        <div class="card-title-container">
                            <h5 title="${this.nombre}" class="card-nombre">
                            ${this.nombre.length > 50 ? this.nombre.substring(0, 47) + "..." : this.nombre}
                            </h5>
                        </div>
                        <div class="card-description-container my-2">
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

export { ProductCard };
