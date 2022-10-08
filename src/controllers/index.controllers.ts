import { Console } from "console";
import { Request, Response } from "express"
import {QueryResult} from 'pg'
import {db} from '../database/database';



export const getInicio = (req:Request,res:Response)=>{

    res.send('Inicio');
}

export const getUser = async (req:Request,res:Response):Promise <Response> => {
    try{
        const response:QueryResult = await db.query('Select * From Usuarios');
        return res.status(200). json('Usuarios');
    } 
    catch(e){
        return res.status(500).json('Error interno en el Server')
    }
    
}


