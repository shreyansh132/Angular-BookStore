import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
export class SearchResultComponentComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    if (this.bookService.subsVar==undefined) {    
      this.bookService.subsVar = this.bookService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.firstComponentFunction(name);
      });    
    }    
  }

  firstComponentFunction(name: string){    
    this.bookService.getBooksByName(name).subscribe(data=> this.books = data);
  } 
}
