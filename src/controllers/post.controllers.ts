import { Request, Response } from "express"
import {QueryResult} from 'pg'
import {connet} from '../database/database'
import {Cargo,
        Egreso,
        Empleado,
        Grupo_terapeutico,
        Ingreso,
        Laboratorio,
        Medicamento,
        Presentacion 
        } from '../interface/post.interface'

export var cargo = async (res:Response, req:Request)=>{
    const conn = await connet();
    const cargo:Cargo = req.body;
    await conn.query('INSERT INTO  cargo SET ?', [cargo]);
    res.status(200).json({
        message: 'Post Creado'
    })
}

