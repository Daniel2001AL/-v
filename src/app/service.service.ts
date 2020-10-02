import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER = "http://localhost:9003/";

  constructor(private httpclient : HttpClient) {
  
   }

  public getAllProviders(nameEndPoint : String ){
    return this.httpclient.get(this.REST_API_SERVER+nameEndPoint);
      
  }
  public getAllProducts(nameEndPoint : String ){
    return this.httpclient.get(this.REST_API_SERVER+nameEndPoint);
      
  }
}

