// const root = document.getElementById('container');
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = 'First item';
// ul.appendChild(li1);
// const li2 = document.createElement('li');
// li2.innerText = 'Second item';
// ul.appendChild(li2);
// const li3 = document.createElement('li');
// li3.innerText = 'Third item';   
// ul.appendChild(li3);
// root.appendChild(ul);


/*

***** React *****
    React is a JavaScript library for building user interfaces.
    It is used to build single page applications. It is a website or application that updates the page with new data without 
    refreshing the page.
    React is used to build user interfaces (UI) on the front end of web applications.
    It is used to create reusable UI components.

*****    Cross Delivery Network (CDN)   *********
    CDN stands for Content Delivery Network. 
    It's a group of servers that work together to deliver content to users quickly. 
    CDNs are used to speed up websites and applications.
    
*****    Cross Origin Resource Sharing  *********
    A mechanism that allows resources on a web page to be requested from another domain outside their own domain.
    This is a security measure to prevent malicious websites from stealing data.
    Cross-origin resource sharing (CORS) is a security feature that allows websites to make requests to other domains.
*/

// console.log(React);
// console.log(ReactDOM);
// -------------------------------------------------------------------------------------------------------------------
// const ReactRoot = ReactDOM.createRoot(document.getElementById('container'));

// const li1 = React.createElement('li',
//     {
//         style:
//         {
//             color: 'red'
//         }
//     }, 'First item');  //--> type,options,children
// const li2 = React.createElement('li',
//     {
//         style:{
//             color: 'green'
//         }
//     }
//     , 'Second item');
// const li3 = React.createElement('li', 
//     {
//         style:{
//             color: 'blue'
//         }
//     },
//      'Third item');
// const ul = React.createElement('ul', null, li1, li2, li3);
// ReactRoot.render(ul);

//--------------------------------------------------------------------------------------------------------------------

// const domRoot = document.getElementById('container');
// const reactRoot = ReactDOM.createRoot(domRoot);
// const title = React.createElement('h1',
//     {
//         style:{
//             color : 'red'
//         }
//     }
//     , 'Hello World from React DOM');

// console.log("Type of title :", typeof title);
// console.log("Title :", title);


// const title2 ={
//         $$typeof: Symbol.for("react.element"),
//         "type": "h1",
//         "key": null,
//         "ref": null,
//         "props": {
//             "style": {
//                 "color": "red"
//             },
//             "children": "Hello World from React DOM"
//         },
//         "_owner": null,
//         "_store": {}
//     }

// reactRoot.render(title2);

// -------------------------------------------------------------------------------------------------------------------
//  $$typeof : It prevents the applications and websites from cross site scripting attacks.
//--------------------------------------------------------------------------------------------------------------------

// JSX : JavaScript Syntax Extension, is a syntax extension that lets you write HTML-like code in JavaScript. 
//       It's used in React, a JavaScript library for building user interfaces. 
//       JSX is not a separate language, but a syntax extension that transforms into regular JavaScript.
//       JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
//       JSX is used in React to create user interfaces.

//--------------------------------------------------------------------------------------------------------------------

const domRoot = document.getElementById('container');
const reactRoot = ReactDOM.createRoot(domRoot);
const title2 = <h1 style={{color: 'red'}}>Hello World from React DOM</h1>;//React element
const Title3 = ()=>{ 
    return <h1>Hello World from React Component</h1>;
}; // React component
//reactRoot.render(title2);
//reactRoot.render(title3()); // Another way to call the react component just like the function.
reactRoot.render(<Title3/>);  // Another way to call the react component like tag.


//---------------------------------------------------------------------------------------------------------------------
/*
A transpiler in React is a tool that converts JSX to JavaScript so that browsers can understand it. 
Babel is a popular open-source transpiler for React. 
*/
//---------------------------------------------------------------------------------------------------------------------

/*
-----------------------------------------------------------------------------------------------------------------------
React component: 
    Components are like functions that return HTML elements.
    React components are reusable and can be used in other components.
    Components are independent and reusable bits of code. 
    They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
-----------------------------------------------------------------------------------------------------------------------

*/