import mongoose from "mongoose";
const { Schema, model} = mongoose;
const produitSchema =  new Schema(
    {
        localisationDeLaScene :{
            type: String,
            required: true            
        },
        codePostal :{
            type: Number,
            required: true            
        },
        longitude :{
            type: Number,
            required: true            
        },
        latitude :{
            type: Number,
            required: true            
        },
        Films :[{
            type: Schema.Types.ObjectId,
            ref: 'Film',
            required: false
            }],
        
        SocieteDeProductionid :{
            type: Schema.Types.ObjectId,
            ref: 'SocieteDeProduction',
            required: false
        },
    },
    {
        timestamps: true
    }
);



export default model('Produit',produitSchema);