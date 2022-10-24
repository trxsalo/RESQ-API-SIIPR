import { Router } from "express";
import {cargo,
        egreso,
        empleado,
        grupo_terapeitico,
        ingreso,
        laboratorio,
        lote,
        medicamento,
        presentacion,
        producto
        } from '../controllers/post.controllers';

const ruta = Router();

ruta.post('/cargo', cargo);

ruta.post('/egreso', egreso);

ruta.post('/empleado', empleado);

ruta.post('/grupo_t', grupo_terapeitico);

ruta.post('/ingreso', ingreso);

ruta.post('/laboratorio', laboratorio);

ruta.post('/lote', lote);

ruta.post('/medicamento', medicamento);

ruta.post('/presentacion',presentacion);

ruta.post("/producto", producto);
export default ruta;
