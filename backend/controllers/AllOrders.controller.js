import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

const AllOrders= async (req, res) => {
  
    try {
        const orders = await Order.find().populate('items').populate('userId').populate({
          path: 'items.productId',
          model: 'Product',
        }) ;
        
        res.status(200).json(orders);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
      }

}
 export default AllOrders;