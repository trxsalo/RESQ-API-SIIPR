import {config as dotenv} from 'dotenv';
dotenv();

const {Client} = require('pg')

export const pool = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})
