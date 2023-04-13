
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const gpordersSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   type: String,
   name: String,
   description: String,
   price: Number,
   price_currency_type: String,
   cost: Number,
   cost_currency_type: String,
   gephistoryid: String
})

const gpordersModel = mongoose.model('gporders', gpordersSchema, 'gporders');
export default gpordersModel;
