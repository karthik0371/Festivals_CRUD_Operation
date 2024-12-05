import Festivals from "../models/userModel.js";

//Create a new user
export const createUser=async(req, res) => {
    try{
        const userData=Festivals(req.body);         //Festival is a model,extracting and storing in varibale
        if(!userData) {
            return res.status(404).json({msg: "User not found"});
        }
        await userData.save();                      //when aysnc func is used,await func should also be used
        res.status(200).json({msg:"User created successfully"});
    }
    catch (err) {
        res.status(500).json({error:error.message});  
    }
}

export const getAll =async (req, res) => {
    try{
        const userData = await Festivals.find();
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        res.status(200).json(userData);//res->response and we are directly passing userdata in json

    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await Festivals.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }
        res.status(200).json(userExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await Festivals.findById(id);        //findByid->retrieving data from MongoDB
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }

        const updatedData = await Festivals.findByIdAndUpdate(id, req.body, {new:true});         //id->previous data,req.body->user new data
        res.status(200).json({msg: "User updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteUser = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await Festivals.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not exist"});
        }
        await Festivals.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}