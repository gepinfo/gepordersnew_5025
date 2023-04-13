import { Request, Response, NextFunction } from "express";
import { gpordersController } from '../controller/gpordersController';


export class Routes {
    private gporders: gpordersController = new gpordersController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/gporders/:id').delete(this.gporders.GpDelete);
app.route('/gporders/get/search').get(this.gporders.GpSearch);
app.route('/gporders/get/update').put(this.gporders.GpSearchForUpdate);
app.route('/gporders').put(this.gporders.GpUpdate);
app.route('/gporders/:id').get(this.gporders.GpGetNounById);
app.route('/gporders').get(this.gporders.GpGetAllValues);
app.route('/gporders').post(this.gporders.GpCreate);
app.route('/gporders/userid/created_by').get(this.gporders.GpGetNounCreatedBy);
     }

}