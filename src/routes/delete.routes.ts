import { Router } from "express";

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
from "../controllers/delete.controllers"

const ruta = Router();

ruta.delete('/cargo/:getId', Cargo);

ruta.delete('/egreso/:getId', Egreso);

ruta.delete('/empleado/:geId', Empleados);

ruta.delete('/grupoTerapeutico/:getId', GrupoT);

ruta.delete('/ingreso/:getId', Ingreso);

ruta.delete('/laboratorio/:getId', Laboratorio);

ruta.delete('/lote/:getId', Lote);

ruta.delete('/medicamento/:getId', Medicamento);

ruta.delete('/presentacion/:getId',Presentacion);

ruta.delete("/producto/:getId", Producto);


export default ruta;