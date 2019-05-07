import { Injectable } from '@angular/core';
import { environment } from '@4c-environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IndicatorService {

  baseUrl = environment.BACKEND_URL + '/indicator';

  constructor(private http: HttpClient){}


  getAllIndicators(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

}
