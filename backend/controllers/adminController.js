 import validator from "validator";
 
 
 
 //API for adding doctor

 const addDoctor = async (req,res) => {
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        const imageFile = req.file;
        
        //checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({
                success: false,
                message: "missing details"
            })
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "please enter valid email"
            })
        }
    }catch(error){

    }
 }

 export {addDoctor}
