import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  // we are able to create a notice service which will be shown 
  constructor(private _http: HttpClient) { }
  
  addNotice(data:any): Observable<any>{
     return this._http.post('http://localhost:3000/notice',data);
  }

  getNotice() : any { 
      return this._http.get('http://localhost:3000/notice');
  }

  deleteNotice(id : number) : Observable<any> {
     return this._http.delete(`http://localhost:3000/notice/${id}`);
  }
}
