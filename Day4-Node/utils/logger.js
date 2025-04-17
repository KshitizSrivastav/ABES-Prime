const fsPromises = require('fs/promises');

const saveLog = (str) => {
    fsPromises.appendFile("logs.txt", str);
}

const requestLog = (req) => {
    const {method, url} = req;
    const date = new Date();
    saveLog(`${date.toLocaleString()} - ${method} - ${url}\n`);
}

// const saveProduct = (data) => {
//     fsPromises.appendFile("data.json", data);
// }

module.exports = {
    requestLog
}