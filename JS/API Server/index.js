//require : 설치한 모둘을 추출 후 변수에 저장
const express = require('express'),
app = express()
//포트번호
const port = 8080
//메소드인 listen으로 서버를 킨다. 
//listen(포트번호, 서버를 킨후에 실행 함수)
app.listen(port, ()=>console.log(`SERVER ON PORT : ${port}`))

//nodemon 모듈 : 저장할때마다 서버를 다시 켜주는 모듈