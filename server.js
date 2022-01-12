const express=require('express')
const bcrypt = require('Bcrypt')
app=express()
app.use(express.json())
var encrypted;
app.post('/signup',async(req,res) =>{
const password=req.body.password;

//console.log(req.body)
var encryption_cylce=5; //how many times, you want to encrypt
const hash_password=async(password,encryption_cylce)=>{
    const encrypted=await bcrypt.hash(password,encryption_cylce).then((data)=>{
        
        return data
    })
    return encrypted
}
 encrypted=await hash_password(password,encryption_cylce) //Encrypted 
//console.log(encrypted)
res.send(encrypted)
})


//Password Matcher
app.post('/signin',(req,res)=>{
    const password=req.body.password
    bcrypt.compare(password,encrypted).then(result=>{
        if(result){
            res.send("Welcome ")
        }
        else{
            res.json({message:"Wrong Password"})}
    })
})
app.listen(3000,()=>{
    console.log('Server is listening')
})