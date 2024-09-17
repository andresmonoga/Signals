import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {


  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';


getUserById( id: number ): Observable<any>{

  return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
  .pipe(
    map( response => response.data ),
    tap( console.log ),
   );
}

}
