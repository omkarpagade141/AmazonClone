import { Product } from '../models/product.model.js';
import { upload, cloudinary } from '../app.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary'



export const createProduct = async (req, res) => {


    try {
        await cloudinary.uploader.upload(req.file.path, async function (err, result) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
            }
            console.log(result);

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

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {

        const { name, description, price, category } = req.body;
        const imageUrl = req.file ? req.file.path : undefined;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, category, ...(imageUrl && { imageUrl }) },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
