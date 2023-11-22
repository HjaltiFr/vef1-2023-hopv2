async function fetchProducts() {
    let products = [];

    const baseUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';
    const endpoint = 'products';
    let url = baseUrl + endpoint;


    while (url) {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            products = products.concat(data.items);


            if (data._links.next) {
                const nextUrl = data._links.next.href;
                const nextPathandQuery = nextUrl.split('/products')[1];
                url = baseUrl + endpoint + nextPathandQuery;
            } else {
                url = null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            url = null;
        }
    }
    renderProducts(products);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams =new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    var pathArray = window.location.pathname.split('/');

    if (productId) {
        displayProductDetails(productId);
    } else if (pathArray[1] == 'products') {
    
    } else{
        const url = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/';
        fetchProducts(url);
        fetchFeaturedProducts();
    }
});