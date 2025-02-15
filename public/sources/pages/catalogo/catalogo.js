
const getProducts = async( url ) => {

    try {
        const response = await fetch("/public/sources/pages/catalogo/data2.json");
        const products = await response.json();
        // TODO crear función DTO  cont productsDTO = conversionDTO( products);
        // TODO const cards = generateCardsOfProducts( productsDTO );
        const cards = generateCardsOfProducts( products );
        insertCardsToHTML( cards );            
    } catch (error) {
        console.error( error );
    }
}

generateCardsOfProducts = ()