import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${environment.serviceUrl}/book`
  constructor(private http : HttpClient) { }

  addBook(book: any){
    return this.http.post<any>(this.url, book)
      .pipe(map((res)=>{
        return res;
      }));
  }

  getBook(): any{
    return this.http.get<any>(this.url);
  }
}
