import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor(private http: HttpClient) { }


  getFeatureProducts(): Observable<Product[]> {
    debugger;
    let URL = 'http://localhost:61632/api/GetFeatureProducts';
    return this.http.get(URL, { responseType: 'json' }).pipe(
      map(res => res['ResultData']),
      catchError(this.handleErrorObservable)
    );
  }

  private handleErrorObservable(error: Response | any) {
    debugger;
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
