import { Request, Response } from 'express';
import {gpordersDao} from '../dao/gpordersDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let gporders = new gpordersDao();

export class gpordersService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpDelete')
     let  gpordersId = req.params.id;
     gporders.GpDelete(gpordersId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpSearch')
     let  gpordersData = req.query;
     gporders.GpSearch(gpordersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpSearchForUpdate')
     let  gpordersData = req.body;
     gporders.GpSearchForUpdate(gpordersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpUpdate')
     let  gpordersData = req.body;
     gporders.GpUpdate(gpordersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpGetNounById')
     let  gpordersId = req.params.id;
     gporders.GpGetNounById(gpordersId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpGetAllValues')
     
     gporders.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpCreate')
     let  gpordersData = req.body;
     gporders.GpCreate(gpordersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gpordersService.ts: GpGetNounCreatedBy')
     let  gpordersData = { created_by: req.query.createdby };
     gporders.GpGetNounCreatedBy(gpordersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gpordersService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}