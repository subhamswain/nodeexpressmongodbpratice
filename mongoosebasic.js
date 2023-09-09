const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-com")
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const main=async()=>{
    
const ProductsModel=mongoose.model('products',ProductSchema)
let data = new ProductsModel({name:"samsung10",price:2567,brand:"galaxy prime",category:"mobile"});
let result=await data.save();
console.log(result);
}


const updateInDb=async ()=>{
    const Products=mongoose.model('products',ProductSchema)
    let data=await Products.updateOne(
        {name:"m10"},
        {
            $set:{price:90000}
        }
    )
    console.log(data);
}

const deleteInDb=async()=>{
    const Products=mongoose.model('products',ProductSchema);
    let data=await Products.deleteOne(
        {name:"m8"}
    );
    console.log(data);
}

const findInDb=async()=>{
    const Products=mongoose.model('products',ProductSchema);
    let data=await Products.find({name:"yt 10"});
    console.log(data);
}
findInDb();
