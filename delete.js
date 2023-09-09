const dbConnection=require('./mongodb');
const deleteData=async ()=>{
    let data=await dbConnection();
    let result=await data.deleteMany({name:'micromax 4'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("record deleted")
    }
}
deleteData();