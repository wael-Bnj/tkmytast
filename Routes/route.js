const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.post('/add-profile', (req, res, next) => { 
    const {error} =ajoutprofileValidation(req.body);
    if(error)return res.status(400).send(error.details[0].message)

    let newProfile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    newProfile.save((err, Profile) => {
        if (err) {
            res.json({ msg: 'Failed to add Profile' });
        }
        else {
            res.json(Profile);
        }
    });

});

router.put('/update-profile/:id', (req, res) => {

    Profile.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        }
    )
});


router.get('/getAll-profiles',(req,res)=>{
    Profile.find(function(err,profiles){
      res.json(profiles);
  }) 
});

router.delete('/delete-profile/:id',(req,res,next)=>{
    Profile.remove({_id: req.params.id},function(err,result){
        if(err)
        {
           res.json(err); 
        }

        else{
            res.json(result);
        }
    });
});

module.exports=router;