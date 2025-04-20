const express = require("express");
const fs = require('fs/promises');
const path = require("path");
const { v4: uuidv4} = require("uuid");

const app = express();
const PORT = 2100;
const file = path.join(__dirname, "products.json");

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

async function createFile(params) {
    try {
        await fs.access(file);
        console.log("Products file already exists");
    } catch (error) {
        console.log("Creating new products file");
        await fs.writeFile(file, JSON.stringify([], null, 2));
    }    
}
//READ OPERATIONS
async function readProducts(){
    try{
        const data = await fs.readFile(file,'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log("Error occurred");
        return [];
    }
}
//WRITE OPERATIONS
async function writeProducts(products){
    try{
        await fs.writeFile(file, JSON.stringify(products, null, 2));
        return true;
    } catch(error){
        console.log("Error Occurred");
        return false;
    }
}
//CREATE
app.post('/api/products', async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
      
      const products = await readProducts();
      
      const newProduct = {
        id: uuidv4(),
        name: name,
        description: description,
        price: Number(price),
        category: category
      };
      products.push(newProduct);
    await writeProducts(products);
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create product' 
    });
  }
});
//READ
app.get('/api/products', async (req, res) => {
    try {
      const products = await readProducts();
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch products' 
      });
    }
  });
//UPDATE
app.put('/api/products/:id', async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
      const products = await readProducts();
      
      const index = products.findIndex(p => p.id === req.params.id);
      
      if (index === -1) {
        return res.status(404).json({ 
          success: false, 
          message: 'Product not found' 
        });
      }
      products[index] = {
        ...products[index],
        name: name || products[index].name,
        description: description || products[index].description,
        price: price !== undefined ? Number(price) : products[index].price,
        category: category || products[index].category
      };
      
      await writeProducts(products);
      
      res.json({
        success: true,
        message: 'Product updated successfully',
        data: products[index]
      });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to update product' 
      });
    }
  });

//DELETE
app.delete('/api/products/:id', async (req, res) => {
    try {
      const products = await readProducts();
      const initialLength = products.length;
      
      const filteredProducts = products.filter(p => p.id !== req.params.id);
      
      if (filteredProducts.length === initialLength) {
        return res.status(404).json({ 
          success: false, 
          message: 'Product not found' 
        });
      }
      
      await writeProducts(filteredProducts);
      
      res.json({
        success: true,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to delete product' 
      });
    }
});

async function start()
{
    await createFile();
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })
}

start();

