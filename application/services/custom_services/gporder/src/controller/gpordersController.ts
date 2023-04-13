import { Request, Response } from 'express';
import { gpordersService } from '../service/gpordersService';
import { CustomLogger } from '../config/Logger'
let gporders = new gpordersService();

export class gpordersController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gporders.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gpordersController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gpordersController.ts: GpGetNounCreatedBy');
    })}


}