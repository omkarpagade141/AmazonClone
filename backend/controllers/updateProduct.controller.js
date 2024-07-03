import { Product } from "../models/product.model.js";

const updateProduct = async (req, res) => {
    try {
        
        const { id } = req.params;
        const { name, price, description, image } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description, image }, { new
            : true
            });
         
        res.status(201).json(updatedProduct);
      } catch (error) {
        res.status(500).send('Server Error');
      }
}
export default updateProduct;

