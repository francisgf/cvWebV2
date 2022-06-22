import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  private baseUrl = 'http://localhost:9090/postulant/list';

  constructor(private http: HttpClient) { }

  /*getpostulant(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/byId/${id}`);
  }*/

  /*createpostulant(postulant: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, postulant);
  }
*/
  /*updatepostulant(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }*/

 /* deletepostulant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/

  getpostulantsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
