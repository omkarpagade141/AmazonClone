import { Product } from "../models/product.model.js";

const AllProducts= async (req, res) => {
     
     
    try {
        const products = await Product.find();
        res.json(products);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

}
 export default AllProducts;