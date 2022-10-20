
import { Pool } from 'pg'

export async function connet() {

    const con = await new Pool({
        user: 'siirf',
        host: 'localhost',
        database: 'DB_SIIPRF',
        password: '1234',
        port: 5432
    })
    return con;
}