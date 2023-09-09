const dbConnection=require('./mongodb');
const updateData=async ()=>{
    let data=await dbConnection();
    let result=await data.updateOne(
        {name:"x3"},{
            $set:{name:'micromax 4',price:1300}
        }
    );
    console.warn(result)
}
updateData();