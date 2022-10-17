import {check} from 'express-validator';
import {Request,NextFunction,Response} from 'express';
import {validateResult} from '../helpers/validate.helpers'
const loginUser =[
    check('user') // que revice user
        .exists() //si exite?
        .not()// que no este vacio
        .isEmpty(),//
    check('password')//que revice password
        . exists() //si exite?
        .not()// que no este vacio
        .isEmpty(),

    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }

]

const postCargo = [
    check('nombre')
        .exists()
        .not()
        .isEmpty()
]


const postEgreso = [
    check('fecha'),

    check('descripcion')

]




const postPresentacion=[
    check('nombre')
        .exists()
        .not()
        .isEmpty()
]


const post= [
    check('fecha')
        .exists()
        .isDate()
        .isEmpty()
        .not(),
    check('descripcion')
        .isEmpty()
        .not()
        .exists()
]

const empleado = [
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
    check('fullName')
        
]
module.exports= {loginUser};