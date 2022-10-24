import { Request, Response } from "express" //uso de express los aplicaton req, res
import {connet} from '../database/database' //conexion a la DB 

export const cargo = async (req:Request,res:Response )=>{
    try{
        const conn = await connet();
        const {nombre} = req.body;
        await conn.query("INSERT INTO  cargo (nombre) values ($1)  ", [nombre]);
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
        const {fecha,descripcion} = req.body;
        await conn.query("INSERT INTO  egreso (fecha,descripcion) values ($1,$2) ", [fecha,descripcion]);
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
        const {cargoid,ci,nombrec,apellidop,apellidom,correo,telefono,usuario,contrasenha} = req.body;
        await conn.query("INSERT INTO  empleado (cargoid,ci,nombrec,apellidop,apellidom,correo,telefono,usuario,contrasenha) values ($1,$2,$3,$4,$5,$6,$7,$8,$9 ", 
        [cargoid,ci,nombrec,apellidop,apellidom,correo,telefono,usuario,contrasenha]);
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
export const grupo_terapeitico = async (req:Request,res:Response):Promise<Response>=>{
    try{
    const conn = await connet();
    const {nombre} = req.body;
    await conn.query("INSERT INTO  grupo_tepeitico (nombre)  values ($1)", [nombre]);
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

export const ingreso = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const conn = await connet();
        const {empleadoid,fecha,hora}= req.body;
        await conn.query("INSERT INTO  ingreso (empleadoid,fecha,hora) values ($1,$2,$3)", 
        [empleadoid,fecha,hora]);
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
export const laboratorio = async (req:Request,res:Response):Promise<Response>=>{
    try{
        const conn = await connet();
        const {nombre,correo,telefono,direccion} = req.body;
        await conn.query("INSERT INTO  laboratorio (nombre,correo,telefono,direccion) values ($1,$2,$3,$4)", 
        [nombre,correo,telefono,direccion]);
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

export const lote = async ( req:Request,res:Response):Promise<Response>=>{
    try{
        const conn = await connet();
        const {ingresoid,fecha_vencimineto,medicamentoid,fecha_produccion,laboratorioid} = req.body;
        await conn.query("INSERT INTO  lote (ingresoid,fecha_vencimineto,medicamentoid,fecha_produccion,laboratorioid) values ($1,$3,$4,$5)", 
        [ingresoid,fecha_vencimineto,medicamentoid,fecha_produccion,laboratorioid]);
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
export const medicamento = async (req:Request,res:Response):Promise<Response>=>{
    try{ 
        const conn = await connet();
        const {composicion,grupo_tepeitico,dosificacion,indicacion,contradicion,nombre_medicamento,presentacionid,productoid}= req.body;
        await conn.query("INSERT INTO  medicamento (composicion,grupo_tepeitico,dosificacion,indicacion,contradicion,nombre_medicamento,presentacionid,productoid) values ($1,$2,$3,$4,$5,$6,$7,$8)", 
        [composicion,grupo_tepeitico,dosificacion,indicacion,contradicion,nombre_medicamento,presentacionid,productoid]);
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

export const  presentacion = async ( req:Request,res:Response):Promise<Response> =>{
    try{ 
        const {tipo}= req.body;
        const conn = await connet();
        await conn.query("insert into presentacion (tipo) values ($1)", [tipo])
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


export const  producto = async ( req:Request,res:Response):Promise<Response> =>{
    try{ 
        const {nombre}= req.body;
        const conn = await connet();
        await conn.query("insert into producto (nombre) values ($1)", [nombre])
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