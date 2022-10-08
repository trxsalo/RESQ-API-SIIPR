import express,{ Application, Router} from "express";
import morgan from "morgan";
import rutas from './routes/index.route'
import {config as dotenv}  from 'dotenv';

export class App{

    private app:Application;

    constructor( private port?: number |string){ //inicializacion
        this.app=express(); //usa express
        this.configuracion(); //inicializa la configuracion para port
        this.middleware(); //mensaje por consola y otras ayuda
        this.router();
        dotenv();
    }

    middleware(){
        this.app.use(morgan('dev')); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    configuracion(){
        this.app.set('port', this.port || process.env.SERVER_PORT || 3000 )
    }
    async listen(){
        this.app.listen(this.app.get('port'));
        console.log('Puerto en el server', this.app.get('port'))
    }

    router(){
        this.app.use(rutas);
    }
}