import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
 books:any;
  constructor(private service : BookService , private router : Router) { }

  ngOnInit(): void {
    this.service.getBook().subscribe((res)=>{
        this.books = res.data;
    });
  }

  deleteBook(id:any){
    if(confirm("Confirme Delete")){
      this.service.deleteBook(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
          .then(()=> this.router.navigate(['/book']));
      });
    }
  }


}
