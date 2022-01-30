const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req,res,next)=>
{
    res.send('<form action ="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</form>');
     //Allows the request to continue to the next middleware in line
});
app.get('/product', (req,res,next)=> {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req,res,next)=>{
    res.send('<h1>Hello from NodeJs.</h1>');
});


app.listen(3000);