import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

  search: string = "";

  constructor(private router: Router, private eventEmitterService: BookService) { }

  ngOnInit(): void {}

  searchBooks(keyword : string){
    console.log("1",keyword.length);
    this.router.navigateByUrl('byName/'+keyword);
    this.eventEmitterService.onFirstComponentButtonClick(keyword);

  //   if(keyword.length == 0){
  //     console.log("0",keyword.length);
  //     this.router.navigateByUrl('/allBooks');
  //     this.eventEmitterService.getBooks();      
  //  }
  //  else if(keyword.length > 0){
  //     console.log("1",keyword.length);
  //     this.router.navigateByUrl('byName/'+keyword);
  //     this.eventEmitterService.onFirstComponentButtonClick(keyword);
  //  }
  }   
}
