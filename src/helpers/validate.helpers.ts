import {validationResult} from 'express-validator';
import {Response,Request,NextFunction} from 'express'

export const validateResult= (req:Request,res:Response,next:NextFunction)=>{
    try{
        validationResult(req).throw();
        return next();
    }
    catch(e){
        return res.status(403).json({
            message: 'Invalid Data'
        })
    }
}

