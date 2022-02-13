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

  deleteBook(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl) ;
  }

  getBook(): any{
    return this.http.get<any>(this.url);
  }

  updateBook(book: any ,id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl, book)
      .pipe(map((res)=>{
        return res;
      }));
  }

  getBookById(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

 
}
