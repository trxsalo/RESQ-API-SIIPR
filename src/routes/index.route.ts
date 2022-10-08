import Router from "express";
import { getUser, getInicio} from '../controllers/index.controllers'

const rutas = Router();

rutas.get('/', getInicio);

rutas.get('/User', getUser);



export default rutas;