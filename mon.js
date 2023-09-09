const dbConnection=require('./mongodb')
    // let response=await collection.find({name: 'oneplus'}).toArray();
    // console.log(response);
}
// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })
// console.warn(dbConnection());

const main=async()=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    console.warn(data);
}
main();