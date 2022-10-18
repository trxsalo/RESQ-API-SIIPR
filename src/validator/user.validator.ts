import {check} from 'express-validator';
import {Request,NextFunction,Response} from 'express';
import {validateResult} from '../helpers/validate.helpers'


const loginUser =[
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


module.exports= {loginUser};