import { generateCardsOfProducts } from "../../card/generateCardsOfProducts.js";
import { insertCardsToHTML } from "../../card/insertCardsToHTML.js";


const getProducts = async( url ) => {

    try {
        const response = await fetch( "/public/sources/pages/catalogo/data2.json" );
        const products = await response.json();
        // TODO crear función DTO  cont productsDTO = conversionDTO( products);
        // TODO const cards = generateCardsOfProducts( productsDTO );
        const cards = generateCardsOfProducts( products );
        insertCardsToHTML( cards );            
    } catch (error) {
        console.error( "Error al obtener producto" );
    }
}

export { getProducts }