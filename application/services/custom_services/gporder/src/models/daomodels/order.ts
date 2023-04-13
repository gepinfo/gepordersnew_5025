
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const orderSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   type: String,
   orderstatus: String,
   name: String,
   description: String,
   attachments: String,
   gephistoryid: String
})

const orderModel = mongoose.model('order', orderSchema, 'order');
export default orderModel;
