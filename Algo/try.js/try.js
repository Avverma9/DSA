const express = require('express')
const app=express()

app.use(express.json())

app.get('/' , (req,res) => {
    res.send("hello, world")
})
app.post('/',(req, res)=>{
    const data= req.body
    req.body= data
    console.log(data)
    res.status(201).send ({msg:"success"})
}

)
app.patch('/', (req,res) =>{
    const data= req.query.name
    console.log(data);
    res.status(201).send ({msg:"success"})
})

let users= [
    {id :1 , name : "ankit"}
]
app.delete('/:id',(req,res) =>{
   const id = req.params.id
   const data = users.findIndex(user => user.id === id)

    users.splice(data, 1)
    res.status(200).send(`${id} deleted`)
   


})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
