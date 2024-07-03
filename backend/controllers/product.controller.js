import { Product } from '../models/product.model.js';
import { upload, cloudinary } from '../app.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary'



const createProduct = async (req, res) => {


    try {
        await cloudinary.uploader.upload(req.file.path, async function (err, result) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
            }


            const { name, description, price, category } = req.body;
            const image = `${result['secure_url']}`




            const product = new Product({ name, description, price, category, image });;



            await product.save();
            res.status(201).json(product);
        })
    } catch (error) {

        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

const searchProduct = async (req, res) => {
    const searchTerm = req.params.searchTerm;

    try {
      if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
      }
  
      
      const regex = new RegExp(searchTerm, 'i');  
      const products = await Product.find({ name: regex });
  
      res.json(products);
    } catch (err) {
      console.error('Error searching products:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
};


 export {
    createProduct,
    searchProduct
}











