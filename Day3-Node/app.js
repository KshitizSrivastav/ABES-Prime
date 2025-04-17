const http = require("http");
const { saveObjInFile } = require("./fileHelper.js");
// const fsPromises = require("fs/promises");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // const {url} = req;
    // console.log(Object.keys(req));
    // console.log(req.method);

    const {url, method} = req;
    console.log("🟣 : URL : ",url);
    const [path, queryStr] = url.split("?");
    // if(url === '/products' && method === 'POST'){
    if(path === '/products' && method === 'POST'){
        // console.log(Object.keys(req));
        // console.log("queryStr : ",queryStr);
        const queryItems = queryStr.split("&");
        // console.log("🟣 : queryItems : ",queryItems);

        const queryKeyVals = queryItems.map((str) => str.split("="));
        // console.log("🟣 : queryKeyVals : ",queryKeyVals);

        const obj = Object.fromEntries(queryKeyVals);
        // console.log("🟣 : obj : ",obj);

        // fsPromises.writeFile("./data.json", JSON.stringify([obj], 2));
        saveObjInFile(obj);

        res.end(
            JSON.stringify({
                status: "success",
                message: "Product added",         
            })
        );
    }
});

server.listen(2100, () => {
    console.log("🟣 : Server is running on port 2100");
    console.log("--------------------");
});
