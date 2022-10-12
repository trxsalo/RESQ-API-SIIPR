import Router from "express";
import {getInicio} from '../controllers/index.controllers'

const rutas = Router();

rutas.route('/')
    .get(getInicio)

