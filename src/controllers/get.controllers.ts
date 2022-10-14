
import { Request, Response } from "express"
import {connet} from '../database/database';
import { QueryResult } from "pg";

/**
 * 
 * Aqui se consulta a las base de datos para regresar la  informacion en un formato json
 *  
 */

export const getEmpleados= async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta 
        const conn = await  connet();
        const usuarios:QueryResult = await conn.query('SELECT * FROM empleado');
        return res.status(200).json(usuarios.rows );
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}


export const getCargo= async (req:Request, res:Response):Promise<Response>=>{

    try{
        const conn = await  connet();
        const cargo:QueryResult = await conn.query('SELECT * FROM cargo');
        return res.status(200).json(cargo.rows );
    }
    catch(e){
        return res.status(500).json({
            message:'Error Interno'
        })
    }

}



export const getEgreso= async (req:Request, res:Response):Promise<Response>=>{

    try{
        const conn = await  connet();
        const cargo:QueryResult = await conn.query('SELECT * FROM cargo');
        return res.status(200).json(cargo.rows );
    }
    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }

}

export const getIngreso= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const ingreso:QueryResult = await conn.query('SELECT * FROM ingreso');
        return res.status(200).json(ingreso.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}


export const getGrupoT= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const grupo:QueryResult = await conn.query('SELECT * FROM grupo_terapeitico');
        return res.status(200).json(grupo.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const getLaboratorio= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const laboratorio:QueryResult = await conn.query('SELECT * FROM laboratorio');
        return res.status(200).json(laboratorio.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const getLote= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const lote:QueryResult = await conn.query('SELECT * FROM lote');
        return res.status(200).json(lote.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const getMedicamento = async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const medicamento:QueryResult = await conn.query('SELECT * FROM medicamento');
        return res.status(200).json(medicamento.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}

export const getPresentacion= async (req:Request, res:Response):Promise<Response>=>{

    try {
        const conn = await  connet();
        const pres:QueryResult = await conn.query('SELECT * FROM presentacion');
        return res.status(200).json(pres.rows );
    }

    catch(e){
        return res.status(500).json({
            message: 'Error Interno'
        })
    }
}