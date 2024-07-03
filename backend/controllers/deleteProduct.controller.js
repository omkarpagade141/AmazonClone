import { Product } from "../models/product.model.js";

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(201).json('product deleted successfully @@@@@@@@@@');
    } catch (error) {
        res.status(500).json(error.message);
    }

}
export default deleteProduct;

