const express=require('express');
const path=require("path");
const app=express();
const publicPath=path.join(__dirname,"public")
app.set('view engine','ejs');
app.use(express.static(publicPath))
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/profile',(_,resp)=>{
    const user={
        name:'subham',
        email:'subhamswain00@gmail.com',
        skills:['python','nodejs','reactjs','javascript']
    }
    resp.render('profile',{user});
});
app.get('/login',(_,resp)=>{
    resp.render('login');
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.listen(5000);