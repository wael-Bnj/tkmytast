const mongoose =require('mongoose');

const ProfileSchema = mongoose.Schema({

    
    firstName  :{
        type:String,
        required:true
    },
    lastName  :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    }
});

const Profile=module.exports=mongoose.model('Profile',ProfileSchema);
