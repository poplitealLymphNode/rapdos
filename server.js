const express= require("express")
const app= express()
const PORT=8000

const rappers={
    "21 savage":{
        'age':29,
        'birthname':' Sheya Bin Abraham-Joseph',
        'birthLocation': 'UK'},
    "chance the rapper":{
        'age':29,
        'birthname':' Chancelor Bennet',
        'birthLocation': 'Chicago Illinois'},
    "dylan":{
        'age':29,
        'birthname':' Dylan Dylan',
        'birthLocation': 'Dylan Dylan Dylan Dylan Dylan'}
}


app.get("/",(request, response)=>{
    response.sendFile(__dirname+ "/index.html")
})

app.get("/api/:rapperName",(request, response)=>{
    const rapperName= request.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers["dylan"])
    }
    //response.json(rappers)
})

app.listen(process.env.PORT||PORT,()=>{
    console.log(`The server is running on port ${PORT}!!`)
})