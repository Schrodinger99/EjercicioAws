import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import { InventarioModel } from "../modelsNOSQL/Inventario";

export default class InventarioController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:InventarioController;
    //Métodos de clase
    public static get instance():InventarioController{
        return this._instance || 
        (this._instance = new this("Inventario"));
    }
    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarInventario',
            this.getListarInventario.bind(this));
        this.router.post('/crearInventario',
            this.postCrearInventario.bind(this));    
    }

    private async getListarInventario(req:Request,res:Response):Promise<void>{
        try{
            const inventario = await InventarioModel.find().sort({createdAt:-1});
            res.status(200).json(inventario);
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }
    private async postCrearInventario(req:Request,res:Response):Promise<void>{
        try{
            console.log(req.body);
            await InventarioModel.create(req.body);
            res.status(200).json({message:"Registro de inventario exitoso"});
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }

}