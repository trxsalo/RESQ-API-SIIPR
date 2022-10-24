
import { Request, Response } from "express"
import {connet} from '../database/database';
import { QueryResult } from "pg";

/**
 * 
 * Aqui se consulta a las base de datos para regresar la  informacion en un formato json
 *  
 */

export const Empleados= async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta 
        const id =req.params.getId
        const conn = await  connet();
        const usuario:QueryResult = await conn.query("SELECT * FROM empleado where  empleadoid = ($1) ", [id]);
        return res.status(200).json(usuario.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}


export const Cargo= async (req:Request, res:Response):Promise<Response>=>{

    try{
        const id = req.body.getId
        const conn = await  connet();
        const cargo:QueryResult = await conn.query("SELECT * FROM cargo where cargoid = ($1) ", [id]);
        return res.status(200).json(cargo.rows );
    }
    catch(e){
        return res.status(500).json({
            message:'Error Interno'
        })
    }

}



export const Egreso= async (req:Request, res:Response):Promise<Response>=>{

    try{
        const id = req.body.params.getId
        const conn = await  connet();
        const cargo:QueryResult = await conn.query("SELECT * FROM cargo where cargoid = ($1)", [id]);
        return res.status(200).json(cargo.rows);
    }
    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }

}

export const Ingreso= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.body.params.getId
        const conn = await  connet();
        const ingreso:QueryResult = await conn.query("SELECT * FROM ingreso where ingresoid = ($1)", [id]);
        return res.status(200).json(ingreso.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}


export const GrupoT= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const grupo:QueryResult = await conn.query("SELECT * FROM grupo_terapeitico where grupo_terapeiticoid = ($1)", [id]);
        return res.status(200).json(grupo.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const Laboratorio= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const laboratorio:QueryResult = await conn.query("SELECT * FROM laboratorio where laboratorioid = ($1)", [id]);
        return res.status(200).json(laboratorio.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const Lote= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const lote:QueryResult = await conn.query("SELECT * FROM lote where loteid = ($1)",[id]);
        return res.status(200).json(lote.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const Medicamento = async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const medicamento:QueryResult = await conn.query("SELECT * FROM medicamento where medicamentoid = ($1)", [id]);
        return res.status(200).json(medicamento.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const Producto= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const pres:QueryResult = await conn.query("SELECT * FROM producto where productoid",[id]);
        return res.status(200).json(pres.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const Presentacion= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const id = req.params.getId
        const conn = await  connet();
        const pres:QueryResult = await conn.query("SELECT * FROM presentacion where presentacionid = ($1)", [id]);
        return res.status(200).json(pres.rows);
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}