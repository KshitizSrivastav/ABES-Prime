const getData = async () =>{
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    showUI(data.products);
}

const showUI = (products) => {
    products.forEach(({title,price}) => {
        const newDiv = document.createElement('div');
        
        newDiv.className = 'card';
        newDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${price}</p>
        `;
        root.appendChild(newDiv);
    });
}; 


getData();