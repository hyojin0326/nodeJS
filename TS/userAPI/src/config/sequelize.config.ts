import dotenv from 'dotenv'
dotenv.config()

const config = {
    development : {
        username: 'root',
        password: 'bca0326',
        database: 'api',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
}

export default config