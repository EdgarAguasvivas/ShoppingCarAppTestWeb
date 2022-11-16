import { BaseModel } from "./invoice/base-model"

export class Order extends BaseModel
{
   customerId:string
   invoiced:boolean
   total:number
   totalItems:number
}