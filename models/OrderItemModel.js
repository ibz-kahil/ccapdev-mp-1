var mongoose = require('mongoose');
var OrderItemSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product',
        required:true
    },

    Size: {
        type: String
    },

    flavor: {
        type: String
    },

    addons: [{
        type: String
    }],

    quantity: {
        type: Number,
        required: true
    },

    unitPrice: {
        type: Number,
        required: true
    }
   
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
