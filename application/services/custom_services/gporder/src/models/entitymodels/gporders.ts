
export interface gporders 
{
   created_date_at: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date },
   type: String,
   name: String,
   description: String,
   price: Number,
   price_currency_type: String,
   cost: Number,
   cost_currency_type: String,
   gephistoryid: String
}
