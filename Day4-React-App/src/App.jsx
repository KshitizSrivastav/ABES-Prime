//************************************************************************************************************************************************** */
//In React, "Fragment" and "Div" are used interchangeably. 
// The main difference between the two is that "Fragment" clears out all extra divs 
// from a DOM tree while "Div" adds a div to the DOM tree. With React Fragments, 
// we can create code that is cleaner and easier to read
//************************************************************************************************************************************************* */

    // const getData = () => {
    //     const pr1=fetch('https://dummyjson.com/products');
    //     pr1.then((response) => {
    //         console.log(response);
    //         return response.json();
    //     }).then((data) => {
    //         console.log(data);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
        
    // }


    /*
    ------------------------------------------------------------------------------------------
    Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
    By enabling asynchronous code to appear synchronous, 
    they enhance code readability and make it easier to manage complex asynchronous flows.
    ------------------------------------------------------------------------------------------
    */ 
    

import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
    
    const App = () => { 
        const [products, setProducts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 10;
    
        const getData = async (page) => {
            try {
                const skip = (page - 1) * itemsPerPage;
                const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`);
                const data = await response.json();
                setProducts(data.products); // Store the products in state
            } catch (error) {
                console.log(error);
            }
        };
    
        useEffect(() => {
            getData(currentPage); // Fetch data when the component mounts or page changes
        }, [currentPage]);
    
        const handlePageChange = (e) => {
            setCurrentPage(Number(e.target.value));
        };
    
        return (
            <React.Fragment>
                <h1>Product List</h1>
                <div className="pagination">
                    <label htmlFor="page-select">Select Page: </label>
                    <select id="page-select" value={currentPage} onChange={handlePageChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="card-container">
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.thumbnail} alt={product.title} className="card-image" />
                            <div className="card-content">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    };
    
export default App;

/*
--------------------------------------------------------------------------------------------------------------------------------
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
The first argument is a function that performs the side effect. This function is called every time the component renders.
The second argument is an array of dependencies. If the dependencies change, the side effect is re-run.
If the dependencies are an empty array, the side effect is only run once when the component mounts.
------------------------------------------------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------------------------------------------------
Optional chaining is a JavaScript feature (introduced in ES2020) that simplifies accessing properties and methods of 
nested objects or arrays without explicitly checking for null or undefined values. It uses the ?. operator, which 
short-circuits the expression and returns undefined if any intermediate property in the chain is null or undefine

Conditional rendering in React (and similar frameworks) means displaying different content or components based on 
certain conditions or criteria, enabling dynamic and user-responsive interfaces

The nullish coalescing operator (??) in JavaScript is a logical operator that returns the right-hand side operand 
if the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand
------------------------------------------------------------------------------------------------------------------------------
*/

