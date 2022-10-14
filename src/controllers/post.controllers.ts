import { Request, Response } from "express"
import {QueryResult} from 'pg'
import {connet} from '../database/database'
import {Cargo,
        Egreso,
        Empleado,
        Grupo_terapeutico,
        Ingreso,
        Laboratorio,
        Lote,
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
export var egreso = async (res:Response, req:Request)=>{
    const conn = await connet();
    const egreso:Egreso = req.body;
    await conn.query('INSERT INTO  egreso SET ?', [egreso]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var empleado = async (res:Response, req:Request)=>{
    const conn = await connet();
    const empleado:Empleado = req.body;
    await conn.query('INSERT INTO  empleado SET ?', [empleado]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var grupo_terapeitico = async (res:Response, req:Request)=>{
    const conn = await connet();
    const grupo:Grupo_terapeutico = req.body;
    await conn.query('INSERT INTO  grupo SET ?', [grupo]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var ingreso = async (res:Response, req:Request)=>{
    const conn = await connet();
    const ingreso:Ingreso = req.body;
    await conn.query('INSERT INTO  ingreso SET ?', [ingreso]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var laboratorio = async (res:Response, req:Request)=>{
    const conn = await connet();
    const laboratorio:Laboratorio = req.body;
    await conn.query('INSERT INTO  laboratorio SET ?', [laboratorio]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var lote = async (res:Response, req:Request)=>{
    const conn = await connet();
    const lote:Lote = req.body;
    await conn.query('INSERT INTO  lote SET ?', [lote]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
export var medicamento = async (res:Response, req:Request)=>{
    const conn = await connet();
    const medicamento:Medicamento = req.body;
    await conn.query('INSERT INTO  medicamento SET ?', [medicamento]);
    res.status(200).json({
        message: 'Post Creado'
    })
}

export var presentacion = async (res:Response, req:Request)=>{
    const conn = await connet();
    const presentacion:Presentacion = req.body;
    await conn.query('INSERT INTO  presentacion SET ?', [presentacion]);
    res.status(200).json({
        message: 'Post Creado'
    })
}
