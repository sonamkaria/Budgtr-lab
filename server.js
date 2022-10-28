const express = require('express')
const app = express()
const methodOveride = require('method-override');

// connect dataset
const Budget = require('./models/budget.js'); 


// Middleware
app.use(methodOveride('_method'))
app.use(express.urlencoded({ extended: false }));

//INDUCES
//
// INDEX
app.get('/budget',(req,res) =>{
    total = []
    sum =0
   for(let i = 0; i < Budget.length; i++) {
    let amount = parseInt(Budget[i].amount)
     total.push(amount)
     sum = sum + total[i]}

    res.render('index.ejs',{   
        budgets: Budget,
        sum:sum 
    })

})


// NEW
app.get('/budget/new',(req,res)=>{
    
    res.render('new.ejs')
})

//CREATE
app.post('/budget', (req,res) =>{
    console.log(req.body)
    Budget.push(req.body)
    res.redirect('/budget')
})

// SHOW
app.get('/budget/:id', (req,res) => {
    // console.log(req.param.id)
    res.render('show.ejs',{
        budgets: Budget[req.params.id]
    })
})
;



// LISTEN
app.listen(3000, () => {
    console.log('listening')
})

