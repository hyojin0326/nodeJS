import express, { Request, Response} from "express";
import sequelize from "./models";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port: number = 3000
app.listen(port, async() => {
    console.log(`SEVER ON POST : ${port}`)
    //서버가 켜지고 시퀄라이즈로 디비 연결
    await sequelize
        .authenticate()
        .then(async () =>{
            console.log('connection success')
        })
        .catch((e) =>{
            console.log(e)
        })
})