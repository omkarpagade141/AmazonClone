import { Order } from "../models/order.model.js";

const orderProduct = async (req, res) => {
    
    console.log('@@@@@@ 1');
    const { userId, items, totalPrice } = req.body;
    
    console.log(userId, '@@@@@@ @@@@@@');
     console.log(items,'qwerffdf');
    console.log(totalPrice, '@@@@@@ @@@@@@');
    console.log('@@@@@@ 2');
    try {
        const newOrder = new Order({ userId, items, totalPrice });
        console.log('@@@@@@ 3');
        const savedOrder = await newOrder.save();
        console.log('@@@@@@ 4');
        res.status(201).json(savedOrder);
        console.log('@@@@@@ 5');
    } catch (err) {
        console.log('@@@@@@ 6');
        console.log(err);
        res.status(500).json({ msg: 'Server error' });
    }
};
export default orderProduct