import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpregisterService {
  url='http://fransalonapp-env-1.eba-mv3mavpj.ap-northeast-1.elasticbeanstalk.com';


  constructor(private http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Spregister(data: any){
    return this.http.post(`${this.url}/register`,data);
  }
}
