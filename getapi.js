const express=require('express');
const dbConnection=require("./mongodb");
const mongodb=require("mongodb");
const app=express();
app.use(express.json());
app.get('/',async (req,resp)=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data);
    resp.send(data)
});

app.post('/',async (req,resp)=>{
    
    let data=await dbConnection();
    let result=await data.insertOne(req.body);
    resp.send(result)
});

app.put('/:name',async(req,resp)=>{
    let data=await dbConnection();
    let result=data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send({result:"update"})
})

app.delete('/:id',async(req,resp)=>{
    const data= await dbConnection();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

    resp.send(result)
})
app.listen(5000)