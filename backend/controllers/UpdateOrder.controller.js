import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

const UpdateOrder= async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json({ message: 'Failed to update order status', error: error.message });
      }
  

}
 export default UpdateOrder;