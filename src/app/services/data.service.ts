import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResp } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Observable<UserResp[]> {
    return this.http.get<UserResp[]>('https://jsonplaceholder.typicode.com/users')
  }
}
