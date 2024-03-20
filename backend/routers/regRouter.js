import express from 'express'
import registerModel from '../models/regModel.js'

const router = express.Router()

console.log("get into file")

router.route('/register')
.post(async(req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await registerModel.create(data)
    .then((result) => {
        res.status(200).json(result)
        console.log("user Created")
    }).catch((err) => {
        console.log(err)
        res.status(400).send("Something went Wrong")
    });
})

router.route('/login')
.post(async(req, res) => {
    const {email, password} = req.body

    await registerModel.findOne({email : email})
    .then((result) => {
        if(result){
            if(result.password === password){
                res.send("success")
            }else{
                res.send("Invalid Password")
            }
        }else{
            res.send("Mail id does not exist")
        }
    }).catch((err) => {
        console.log(err)
        res.status(400).send("Something went Wrong")
    });
})

export default router