const express=require('express');
const app=express();
app.get('',(req,resp)=>{
    resp.send(`<h1>hello,this is home page</h1><a href="/about"/>go to about page</a>`);
});

app.get('/about',(req,resp)=>{
    resp.send('hello,this is about page');
});

app.get('/help',(req,resp)=>{
    resp.send([
        {
        name:"sonu",
        email:"subhamswain00@gmail.com"
    },
    {
        name:"san",
        email:"san00@gmail.com"
    },

]);
});
app.listen(4000);