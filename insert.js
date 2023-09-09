const dbConnect=require('./mongodb');
const insert=async ()=>{
    const db=await dbConnect();
    const result=await db.insertMany(
        [
        {name:'x3',brand:'poco',price:600,category:'mobile'},
        
        {name:'x2',brand:'vivo',price:800,category:'mobile'},
        
        {name:'x3',brand:'trio',price:900,category:'mobile'},
        ]
        );

    if(result.acknowledged)
    {
    console.log("data inserted");
}
}
insert()