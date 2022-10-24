
import { Request, Response } from "express";
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
        await conn.query("Delete From empleado where  empleadoid = ($1) ", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From cargo where cargoid = ($1) ", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From cargo where cargoid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From ingreso where ingresoid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From grupo_terapeitico where grupo_terapeiticoid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From laboratorio where laboratorioid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From lote where loteid = ($1)",[id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From medicamento where medicamentoid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From producto where productoid",[id]);
        return res.status(200).json({
            message:"Eliminado"
        });
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
        await conn.query("Delete From presentacion where presentacionid = ($1)", [id]);
        return res.status(200).json({
            message:"Eliminado"
        });
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}