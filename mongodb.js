const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='e-com'
const client=new MongoClient(url);
async function dbConnection(){
    let result=await client.connect();
    db=result.db(database);
    return db.collection('products');
}
module.exports=dbConnection;