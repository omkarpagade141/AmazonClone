import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true,

        
    },
    items: [
    {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
  ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

 
export const Order = mongoose.model("Order", OrderSchema)


