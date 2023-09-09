const express=require('express');
const reqFilter=require('./middleware2')
const app=express();
const route=express.Router();

route.use(reqFilter)
app.get('/',(res,resp)=>{
    resp.send('Welcome to home page')
});

app.get('/users',(res,resp)=>{
    resp.send('Welcome to home page')
});

route.get('/about',(res,resp)=>{
    resp.send('Welcome to home page')
});

route.get('/contact',(res,resp)=>{
    resp.send('Welcome to home page')
});

app.use('/',route);

app.listen(5000)