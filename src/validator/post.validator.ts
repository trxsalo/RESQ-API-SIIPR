import {check} from 'express-validator';
import {Request,NextFunction,Response} from 'express';
import {validateResult} from '../helpers/validate.helpers'

export const postCargo = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
]


export const postEgreso = [
    check('fecha')
        .exists()
        .not()
        .isEmpty(),
    check('descripcion')
        .exists()
        .not()
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
    
]

export const postEmpleado = [
    check('cargoid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),

    check('ci')
        .exists()
        .isAlphanumeric()
        .isEmpty()
        .not(),
    check('nombec')
        .exists()
        .not()
        .isEmpty(),
    check('apellidop')
        .exists()
        .not()
        .isEmpty(),
    check('apellidom')
        .exists()
        .not()
        .isEmpty(),
    check('correo')
        .exists()
        .not()
        .isEmail()
        .isEmpty(),
    check('telefono')
        .exists()
        .not()
        .isAlphanumeric()
        .isEmpty(),
    check('usuario') // que revice user
        .exists() //si exite?
        .not()// que no este vacio
        .isEmpty(),//
    check('contrasenha')//que revice password
        . exists() //si exite?
        .not()// que no este vacio
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
        
]


export const portGrupo_terapeitico =[
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }

]

export const postIngreso=[
    check('empleadoid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
    check('fecha')
        .exists()
        .not()
        .isDate()
        .isEmpty(),
    check('hora')
        .exists()
        .not()
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }

]


export const postLaboratorio=[
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('correo')
        .exists()
        .not()
        .isEmail()
        .isEmpty(),
    check('telefono')
        .exists()
        .not()
        .isAlphanumeric()
        .isEmpty(),
    check('direccion')
        .exists()
        .not()
        .isEmpty(),
        
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }

]

export const postLote=[
    check('fecha_vencimiento')
        .exists()
        .not()
        .isDate()
        .isEmpty(),
    check('fecha_produccion')
        .exists()
        .not()
        .isDate()
        .isEmpty(),
    check('laboratorioid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
    check('medicamentoid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }

]

export const postMedicamento =[
    check('nombre_producto')
        .exists()
        .not()
        .isEmpty(),
    check('producto')
        .exists()
        .not()
        .isEmpty(),
    check('composicion')
        .exists()
        .not()
        .isEmpty(),
    check('grupo_terapeiticoid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
    check('dosificacion')
        .exists()
        .not()
        .isEmpty(),
    check('indicacion')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
    check('contradicion')
        .exists()
        .not()
        .isEmpty(),
    check('presentacionid')
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
    check("productoid")
        .exists()
        .not()
        .isNumeric()
        .isEmpty(),
        (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
]

export const postPresentacion=[
    check('tipo')
        .exists()
        .not()
        .isEmpty(),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
    
]

export const posProducto=[
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
    
]


