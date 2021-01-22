const express = require('express');
const app = express();
 
app.use(express.static('public'));



const users = [
    {name:'Kilani', password:'2222222'},
    {name: 'Malik', password:'3333333'},
    {name: 'debug', password:'44444444'}
];

//route
app.get('/get-users',(req,res)=>{
    console.log(req.query)
    res.send(users);
});

// app.get('/add-users',(req,res)=>{
//     consolelog(req.query)
//     res.send(users);
// })







const port = process.env.PORT || 3000 ; 

 
app.listen(port , function(){   
    console.log('listening', port);
})