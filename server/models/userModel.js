import mongoose from "mongoose";

const userSchema = new mongoose.Schema({        //new-> creating new instance
    festival_name :{                               //defining the fields
        type: String,
        required: true,
    },
    location :{
        type: String,
        required: true,
    },
    date :{
        type: String,
        required: true,
    },
    genre :{
        type: String,
        required: true,
    },
    ticket_price :{
        type: String,
        required: true,
    },
    
});

export default mongoose.model("Festivals", userSchema);                