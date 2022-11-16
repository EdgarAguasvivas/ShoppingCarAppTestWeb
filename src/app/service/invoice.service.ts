import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Invoice, InvoiceDetail } from '../model/invoice/Invoice.model';
import { Order } from '../model/order.model';
import { OrderDetail } from '../model/orderDetail.model';



@Injectable()
export class OrderService extends BaseService<Order, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.order );
  }
  getCurrentOrder(customer:string) {
    return this._httpClient.get<string>(environment.url + endpoint.order+`/getCurrentOrder?customer=${customer}`,this.httpOptions)
  }
 
}
@Injectable()
export class OrderDetailService extends BaseService<OrderDetail, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.orderDetail);
  }
  getDetailByOrder(order:string) {
    return this._httpClient.get<any>(environment.url + endpoint.orderDetail+`/GetDetailByOrder?order=${order}`,this.httpOptions)
  }
 
 
}