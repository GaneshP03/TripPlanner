import express  from "express"
import cors from "cors"
import bodyParser from "body-parser"
import bcrypt from 'bcryptjs'
import './config.js'
import registerCollection from "./models/register.models.js"
import travelSchema from "./models/travel.models.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors()) 
app.use(bodyParser.json())


app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/register',async (req, res) => {
    const data = {
        email : req.body.email,
        username : req.body.username,
        password: req.body.password
    }

    const existingUser = await registerCollection.findOne({name:data.name,email:data.email});


    if(existingUser){
        res.send("name and email exists");
    }

    else{
        const salt = 10;
        const hashPassword =  await bcrypt.hash(data.password,salt);
        data.password = hashPassword;

        const userData = await registerCollection.insertMany(data);
        console.log(userData);
    }

});

app.post('/login',async(req,res)=>{
    const check = await registerCollection.findOne({name:req.body.username});

    if(!check){
        res.send("Username not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);

    if(!isPasswordMatch){
        res.send("Wrong details");
    }
});

app.post('/travel',async(req,res)=>{
   const data = {
    fromplace:req.body.fromplace,
    dest : req.body.dest,
    budget:req.body.budget,
    days:req.body.days,
    people:req.body.people,
    places:req.body.places
   }

   const userData = await travelSchema.insertMany(data);
   console.log(userData);
})

app.get('/query',async(req,res)=>{
   const cursor = await travelSchema.find({}).lean()
   console.log(cursor);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})