import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/classes/book';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})

export class BookGridComponent implements OnInit {
  images = "https://image3.mouthshut.com/images/imagesp/925868055s.jpg";
  books: Book[];
  category: Category[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data=> this.books = data);
    //this.bookService.getCategories().subscribe(data => this.category = data);
      // this.activatedRoute.paramMap.subscribe(() => {
      //   this.listBooks();
      // })   
  }

  // listBooks() {
  //     const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');
  //   if(hasCategoryId){
  //     this.currentCaegoryId = +this.activatedRoute.snapshot.paramMap.get('id');
  //     this.bookService.getBooksByCategoryId(this.currentCaegoryId).subscribe(data=> this.books = data);
  //   }
  //   else{
  //     this.bookService.getBooks().subscribe(data=> this.books = data);
  //   }
  // }
}

