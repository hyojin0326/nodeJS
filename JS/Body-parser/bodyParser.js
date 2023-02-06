const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res)=>{
    const {id, pw} = req.body
    console.log(id, pw)
    /*
    미들웨어 없이 req.body에 접근하는 경우 기본으로 undefined 설정
    bodyParser와 같은 미들웨어를 사용하여 요청 데이터 값에 접근해야함
    */
})

const port = 8080
app.listen(port, ()=> console.log(`SERVER ON PORT : ${port}`))