import { Request, Response } from "express"

export const getInicio = (req:Request,res:Response)=>{
    res.send('Inicio');
}