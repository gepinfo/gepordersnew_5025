
export interface order 
{
   created_date_at: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date },
   type: String,
   orderstatus: String,
   name: String,
   description: String,
   attachments: String,
   gephistoryid: String
}
