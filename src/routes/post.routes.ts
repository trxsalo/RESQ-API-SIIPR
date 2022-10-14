import { Router } from "express";
import {cargo} from '../controllers/post.controllers';

const ruta = Router();

ruta.post('/cargo', cargo)



export default ruta;

