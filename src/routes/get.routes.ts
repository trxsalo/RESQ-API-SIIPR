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

import {Empleados,
        Cargo,
        Egreso,
        Ingreso,
        GrupoT,
        Laboratorio,
        Lote,
        Medicamento,
        Producto,
        Presentacion} 
        from "../controllers/get.controllers.params"
import ruta from "./post.routes";

        const rutas = Router();

rutas.get('/empleado', getEmpleados);
rutas.get('/empleado/:getId', Empleados);

rutas.get('/cargo', getCargo);
rutas.get('/cargo/:getId', Cargo);

rutas.get('/egreso', getEgreso);
rutas.get('/egreso/:getId', Egreso);

rutas.get('/grupoTerapeutico', getGrupoT);
rutas.get('/grupoTerapeutico/:getId', GrupoT);

rutas.get('/ingreso', getIngreso);
rutas.get('/ingreso/:getId', Ingreso);

rutas.get('/lote', getLote);
rutas.get('/lote/:getId', Lote);

rutas.get('/medicamento', getMedicamento);
rutas.get('/medicamento/:getId', Medicamento);

rutas.get('/presentacion', getPresentacion);
rutas.get('/presentacion/:getId', Presentacion);

rutas.get('/laboratorio', getLaboratorio);
rutas.get('/laboratorio/:getId', Laboratorio);

rutas.get('/producto', getProducto);
rutas.get('/producto/:getId', Producto);



export default rutas;

