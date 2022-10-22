import { Request, Response } from "express"
import {connet} from '../database/database'
import {
        Cargo,
        Egreso,
        Empleado,
        Grupo_terapeutico,
        Ingreso,
        Laboratorio,
        Lote,
        Medicamento,
        postPresentacion,
        } from '../interface/post.interface'

export const cargo = async (req:Request,res:Response )=>{
    try{
        const conn = await connet();
        const cargo:Cargo = req.body;
        await conn.query('INSERT INTO  cargo SET ?', [cargo]);
        return res.status(200).json({
            message: 'Post Creado'
        })
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        })
    }


}
export const egreso = async (req:Request,res:Response)=>{
    try{
        const conn = await connet();
        const egreso:Egreso = req.body;
        await conn.query('INSERT INTO  egreso SET ?', [egreso]);
        res.status(200).json({
            message: 'Post Creado'
        });
    }   
    catch(e){
        return res.status(500).json({
            message:'Error'
        })
    }
}
export const empleado = async (req:Request,res:Response)=>{
    try{
        const conn = await connet();
        const empleado:Empleado = req.body;
        await conn.query('INSERT INTO  empleado SET ?', [empleado]);
        return res.status(200).json({
            message: 'Post Creado'
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        })
    }

}
export const grupo_terapeitico = async (req:Request,res:Response)=>{
    try{
    const conn = await connet();
    const grupo:Grupo_terapeutico = req.body;
    await conn.query('INSERT INTO  grupo SET ?', [grupo]);
    return res.status(200).json({
        message: 'Post Creado'
    });
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        });
    }


}
export const ingreso = async (req:Request,res:Response)=>{
    try{
        const conn = await connet();
        const ingreso:Ingreso = req.body;
        await conn.query('INSERT INTO  ingreso SET ?', [ingreso]);
        return  res.status(200).json({
            message: 'Post Creado'
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        });
    }


}
export const laboratorio = async (req:Request,res:Response)=>{
    try{
        const conn = await connet();
        const laboratorio:Laboratorio = req.body;
        await conn.query('INSERT INTO  laboratorio SET ?', [laboratorio]);
        return res.status(200).json({
            message: 'Post Creado'
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        });
    }


}
export const lote = async ( req:Request,res:Response)=>{
    try{
        const conn = await connet();
        const lote:Lote = req.body;
        await conn.query('INSERT INTO  lote SET ?', [lote]);
        return res.status(200).json({
            message: 'Post Creado'
        });
    }
    catch(e){
        return res.status(500).json({
            message:'Error'
        });
    }

}
export const medicamento = async (req:Request,res:Response)=>{
    try{ 
        const conn = await connet();
        const medicamento:Medicamento = req.body;
        await conn.query('INSERT INTO  medicamento SET ?', [medicamento]);
        return res.status(200).json({
            message: 'Post Creado'
        })
    }
    catch(e){
        return res.status(500).json({
            message: 'Error'
        })
    }

}

export async function presentacion( req:Request,res:Response):Promise<Response>{
    try{

        const pres:postPresentacion = req.body;
        const conn = await connet();
        await conn.query("insert into  presentacion set ?",[pres] );

        return res.status(200).json({
            message:"Post creado"
        });
    }
    catch(e){
        return  res.status(500).json({
            messsage:"Error"
        });
    }
}
