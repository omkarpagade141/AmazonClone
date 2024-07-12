import { Order } from "../models/order.model.js";

const orderProduct = async (req, res) => {
    
     
    const { userId, items, totalPrice } = req.body;
    
     
    
     
    try {
        const newOrder = new Order({ userId, items, totalPrice });
        
        const savedOrder = await newOrder.save();
         
        res.status(201).json(savedOrder);
        
    } catch (err) {
         
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
};
export default orderProduct