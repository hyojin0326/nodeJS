import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json()) // 요청을 JSON으로 파싱
app.use(bodyParser.urlencoded({extended: false}))
/*
body-parser 사용 전 : id 와 pw에 undifined 값이 나옴
*/

app.get("/", (req: Request, res: Response)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req: Request,res: Response) => {
    const {id, pw} = req.body
    console.log(id, pw)
  })
  
  const port: number = 8080
  app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
  