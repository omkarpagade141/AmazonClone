import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

const AllOrders= async (req, res) => {
  console.log('@@@@@@@@1');
    try {
        const orders = await Order.find().populate('items.productId').populate('userId');
        console.log('@@@@@2');
        res.status(200).json(orders);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
      }

}
 export default AllOrders;