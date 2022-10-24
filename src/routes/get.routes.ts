import { Router } from "express";
import {
    getEmpleados,
    getCargo,
    getEgreso,
    getGrupoT,
    getIngreso,
    getLaboratorio,
    getLote,
    getMedicamento,
    getPresentacion,
    getProducto
} from '../controllers/get.controllers'

const rutas = Router();

rutas.get('/empleado', getEmpleados);

rutas.get('/cargo', getCargo);

rutas.get('/egreso', getEgreso);

rutas.get('/grupoTerapeutico', getGrupoT);

rutas.get('/ingreso', getIngreso);

rutas.get('/lote', getLote);

rutas.get('/medicamento', getMedicamento);

rutas.get('/presentacion', getPresentacion);

rutas.get('/laboratorio', getLaboratorio);

rutas.get('/producto', getProducto);



export default rutas;

