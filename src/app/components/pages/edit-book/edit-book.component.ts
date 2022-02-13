import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: any;
  currentBook: any ;
  bookForm! : FormGroup ;

  constructor(private service : BookService ,private router : Router, private activatedRouter : ActivatedRoute ) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      book_id : new FormControl(),
      name : new FormControl(),
      author: new FormControl(),
      publisher : new FormControl(),
      price : new FormControl(),
    });

    this.activatedRouter.params.subscribe(params=>{
      this.id = params['id'];
    });

    this.service.getBookById(this.id).subscribe((res)=>{
      this.currentBook = res.data;
      this.bookForm.controls['book_id'].setValue(this.currentBook.book_id);
      this.bookForm.controls['name'].setValue(this.currentBook.name);
      this.bookForm.controls['author'].setValue(this.currentBook.author);
      this.bookForm.controls['publisher'].setValue(this.currentBook.publisher);
      this.bookForm.controls['price'].setValue(this.currentBook.price);
      
    });
  }


  updateBook(){
    let book = {
      book_id: this.bookForm.value.book_id,
      name: this.bookForm.value.name,
      author:this.bookForm.value.author,
      publisher:this.bookForm.value.publisher,
      price:this.bookForm.value.price
    }

    this.service.updateBook(book, this.id).subscribe((res)=>{
      window.alert("Edit Success");
      this.router.navigate(["/book"]);
    })
}



}
