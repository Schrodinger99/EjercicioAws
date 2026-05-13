import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection:'inventarios',
        timestamps:true
    }
})
export class Inventario{
    @prop({required:true,trim:true, unique:true})
    public sku!:string;

    @prop({required:true})
    public cantidad!:number;

    @prop({required:true,trim:true})
    public almacen_id!:string;
}

export const InventarioModel = getModelForClass(Inventario);
