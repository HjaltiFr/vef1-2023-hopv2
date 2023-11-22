fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/')
 .then(res => res.json())
 .then(data => console.log(data))
 
 export async function getProduct(id) {
    const url = new URL('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/');
 }