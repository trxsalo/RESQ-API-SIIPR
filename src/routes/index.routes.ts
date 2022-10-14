import Router from "express";
import {getInicio} from '../controllers/index.controllers'


const rutas = Router();

rutas.get('/',getInicio);

export default rutas;

