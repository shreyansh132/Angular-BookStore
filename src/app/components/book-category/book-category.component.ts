import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Category } from 'src/app/classes/category';
import { Book } from 'src/app/classes/book';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  category: Category[];
  bookList: Book[];

  constructor(private service : BookService) { }

  ngOnInit(): void {
    this.service.getBooksByCategoryId(1).subscribe(data => this.bookList = data);
    // if (this.service.subsVar==undefined) {    
    //   this.service.subsVar = this.service.    
    //   invokeSecondComponentFunction.subscribe((id: number) => {    
    //     this.secondComponentFunction(id);
    //   });    
    //  }    
    // this.service.getCategories()
    // .subscribe(data => this.category = data);
  }

  // navigateCategory(id: number){
  //   console.log("id", id);
  //   // this.service.getBooksByCategoryId(id).subscribe(data = )
  // }
  secondComponentFunction(id: number){    
    //this.service.getBooksByCategoryId(id).subscribe(data => this.bookList = data);
  } 
}
