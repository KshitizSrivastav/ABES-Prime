//npm init
//npm i express
//npm i -g nodemon
//npx nodemon app.js

const express = require('express');
const {requestLog} = require("./utils/logger")
const {saveProductInDB} = require("./db.js")

const app = express();
const PORT = 2100;

// app.get("/", (req, res) => {
//     // res.send("Hello World!");
//     res.json({
//         status: "success",
//         message: Server is running on port ${PORT},
//     });
// });

app.use(express.json()); // for parsing application/json

app.use((req, res, next) => {
    console.log(Object.keys(req));
    requestLog(req);
    next();
})

app.get("/", (req, res) => {
    requestLog(req);
    res.json({
        status: "success",
        message: `Server is running on port ${PORT}`,
    });
})

//create a route for creating product
//add the logic to store product in file

// app.post('/products', (req, res) => {
//     res.json({
//         status: "Fail",
//         message: "Work in progress!",
//     });
// });

app.post("/products", (req, res) => {
    const data = req.body;
    // saveProduct(JSON.stringify(data));
    saveProductInDB(data);
    // requestLog(req);
    res.json({
        status: "Success",
        message: "Work in progress!",
    });
})

app.use("/", (req, res, next) => {
    // res.status(400);
    // res.status(200);
    // res.status(404);
    res.status(500);
    // requestLog(req);
    // next();
    res.json({
        status: "Fail",
        message: "Work in progress!",
    });
})
app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`);
});