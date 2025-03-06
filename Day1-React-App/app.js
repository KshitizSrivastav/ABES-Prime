import React from 'react';
import ReactDOM from 'react-dom/client';
import Card , {Title} from './components/card';
import {Button} from './components/button';
const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return (
        <div>
            {/* <h1>Hello Kshitiz</h1> */}
            <Card username="Kshitiz"></Card>
            {/* or */}
            <Card username="Amit" />
            <Card username="Rahul" />
            <Card username= {Title} />
            <Button color ="submit">Submit</Button>
            <Button color ="cancel">Cancel</Button>
            {/* {Card("Kshitiz")}; */}
        </div>
        //React.createElement("h1", {}, "Hello World")
    );

};

//reactRoot.render(App());
reactRoot.render(<App />);
