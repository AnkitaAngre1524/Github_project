import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {

  constructor(private http: HttpClient) { }

  getData(): Promise <any> {
return new Promise((resolve, reject) => {
  this.http.get('https://api.github.com/users/AnkitaAngre1524/repos')
  .pipe(map((Response: any)=> Response))
  .subscribe((response: any)=>{
    resolve(response);
 },reject)

  })
}
}
