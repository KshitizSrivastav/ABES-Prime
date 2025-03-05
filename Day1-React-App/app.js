import React from 'react';
import ReactDOM from 'react-dom';
const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );

};

reactRoot.render(<App />);
