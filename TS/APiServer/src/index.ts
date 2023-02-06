import express, { Request, Response } from 'express'

const app = express()

const port: number = 8080
app.listen(port, () => console.log(`SERVER ON! PORT : ${port}`))