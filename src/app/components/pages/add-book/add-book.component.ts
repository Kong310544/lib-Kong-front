import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from 'src/app/service/book.service';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private service : BookService , private router : Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      book_id : new FormControl(),
      name : new FormControl(),
      author : new FormControl(),
      publisher : new FormControl(),
      price : new FormControl(),
    
    })
  }

  addBook(){
    let book = {
      book_id:this.bookForm.value.book_id,
      name :this.bookForm.value.name,
      author :this.bookForm.value.author,
      publisher:this.bookForm.value.publisher,
      price :this.bookForm.value.price,
  
    };

    this.service.addBook(book).subscribe(res=>{
      console.log(res);
      if(res.msg="Add Complete"){
        window.alert("Add Complete");
        this.router.navigate(["/book"])
      }else{
        window.alert("Not Success");
        this.router.navigate(["/book/new"])
      }
      
    })
  }

}
