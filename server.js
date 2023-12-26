const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

const LoginSchema = require("./models/AdminLogin")
const PostSchema = require("./models/AdminPosts")

mongoose.connect('mongodb+srv://Giridhar:gIRIDHAR_11@cluster0.9x1wr2m.mongodb.net/Memoir',
 
{
    UseNewUrlParser: true, 
});

app.post("/login", async(req, res) => {
    const n = req.body.name
    const pass = req.body.pass
    const data = await LoginSchema.findOne({name: n, password: pass})
    try{
        if(data){
            res.send({isLoggedin: "loginSuccessful", n})
            console.log("loginSuccessful")
        }else{
            res.send("failed")
            console.log("failed")
        }
    }catch (err){
        res.send(err)
        console.log(err)
    }
})

app.get("/", async(req,res) => {
    const data = await PostSchema.find({})
    res.send(data)
})

app.post("/post", async(req,res) => {
    const t = req.body.title
    const b = req.body.body
    const an = req.body.authorName
    const d = req.body.PostedDate
    const post = new PostSchema({authorName: an, date: d, title:t, body:b})
    try{
        await post.save();
        if(post.save()){
            console.log("posted")
            res.send({Posted: true})
        }
    }catch(err){
        res.send(err)
    }
})

app.delete("/delPost", async(req,res) => {
    const id = req.body.id
    const delPost = await PostSchema.deleteOne({_id: id})
    try{
        if(delPost){
            res.send("post deleted")
        }else{
            res.send("no post found")
        }
    }
    catch(err){
        res.send(err)
    }
})


app.listen(port, ()=> {
    console.log("App is running...", port);
});