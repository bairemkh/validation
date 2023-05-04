import mongoose from "mongoose";
const { Schema, model} = mongoose;
const societedeproductionSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        type :{
            type: String,
            required: true,            
            enum : ["Class",]            
        },
        Produits :[{
            type: Schema.Types.ObjectId,
            ref: 'Produit',
            required: true
            }],
        
        att :{
            type: String,
            required: false            
        },
    },
    {
        timestamps: true
    }
);



export default model('SocieteDeProduction',societedeproductionSchema);