import mongoose from "mongoose";
const { Schema, model} = mongoose;
const filmSchema =  new Schema(
    {
        typeDeTournage :{
            type: String,
            required: true            
        },
        titre :{
            type: String,
            required: true            
        },
        Tournageid :{
            type: Schema.Types.ObjectId,
            ref: 'Tournage',
            required: false
        },
        Produitid :{
            type: Schema.Types.ObjectId,
            ref: 'Produit',
            required: true
        },
    },
    {
        timestamps: true
    }
);



export default model('Film',filmSchema);