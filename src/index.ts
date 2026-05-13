import Server from "./provider/Server";
import {PORT,NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';

//Importar controllers
import InventarioController from "./controllers/InventarioController";
import ClienteController from "./controllers/ClienteController";
 //Integrar el proyecto 

 const server:Server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        InventarioController.instance,
        ClienteController.instance
    ]
 });
 server.init();