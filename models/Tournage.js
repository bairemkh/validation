import mongoose from "mongoose";
const { Schema, model} = mongoose;
const tournageSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        dateDeDebut :{
            type: Date,
            required: true            
        },
        dateDeFin :{
            type: Date,
            required: true            
        },
        Films :[{
            type: Schema.Types.ObjectId,
            ref: 'Film',
            required: true
            }],
        
    },
    {
        timestamps: true
    }
);



export default model('Tournage',tournageSchema);