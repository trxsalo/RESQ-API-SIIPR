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


const postPresentacion=[
    check('name')
        .exists()
        .not()
        .isEmpty()
]

module.exports= {loginUser};