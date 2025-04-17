const {ulid} = require('ulid');
const fsPromises = require('fs/promises');

const saveProductInDB = async (obj) => {
    obj.id = ulid();
    const oldArray = await getProductsArray();
    oldArray.push(obj);
    saveProductsArray(oldArray);
}

const saveProductsArray = (arr) => {
    fsPromises.writeFile("data.json", JSON.stringify(arr, null, 2));
}

const getProductsArray = async () => {
    const str = await fsPromises.readFile("data.json", "utf-8");
    const arr = JSON.parse(str);
    return arr;
}

module.exports = {
    saveProductInDB,
}