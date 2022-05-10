const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const key = process.env.SECRET
const stripe = require("stripe")(key);

//app config 
const app = express();
//Middlewears 
app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());

//api root
app.get('/',(req,res)=> res.status(200).send("hello world!"));
app.post('/payments/create', async (req,res)=>{
    const total=req.query.total;
    console.log('Payment recieved', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


//listen command
exports.api= functions.https.onRequest(app)
