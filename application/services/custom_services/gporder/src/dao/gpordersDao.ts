import * as mongoose from 'mongoose';
import gpordersModel from '../models/daomodels/gporders';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class gpordersDao {
    private gporders = gpordersModel;
    constructor() { }
    
    public async GpDelete(gpordersId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpDelete');

    

    
    
    
    this.gporders.findByIdAndRemove(gpordersId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(gpordersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(gpordersData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.gporders.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(gpordersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpSearchForUpdate');

    

    
    
    
    this.gporders.findOneAndUpdate({ _id: gpordersData._id }, gpordersData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(gpordersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpUpdate');

    

    
    
    
    gpordersData.last_modified_date_at = new Date(),
                                                   this.gporders.findOneAndUpdate({ _id: gpordersData._id }, gpordersData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpUpdate');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date_at = "";
                                                    let temp = new gpordersModel(newresult);
                                                    temp.save();

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(gpordersId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpGetNounById');

    

    
    
    
    this.gporders.aggregate(([{"gephistoryid":gpordersId}, { "$sort": { "last_modified_date_at": -1 }}, { $limit : 1 }])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpGetNounById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpGetAllValues');

    

    
    
    
    this.gporders.aggregate(([
                        { "$sort": { "last_modified_date_at": 1 } },{ "$group": { "_id": "$gephistoryid",  "item": { "$last": "$$ROOT" }  }}    
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpGetAllValues');

        let lastupdated:any = [];
                         result.forEach(item=> lastupdated.push(item.item))
                         result=lastupdated 

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(gpordersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpCreate');

    let gepCallGuid = `${generate(dictionary.numbers, 50)}`;
                    gpordersData.gephistoryid = gepCallGuid;
                    let temp = new gpordersModel(gpordersData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(gpordersData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into gpordersDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.gporders.aggregate(([
                        { $match: { $and: [{ created_by: gpordersData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from gpordersDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}