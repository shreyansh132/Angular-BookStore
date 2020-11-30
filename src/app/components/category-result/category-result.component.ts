import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/service/book.service';
import { getLocaleDateFormat } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-result',
  templateUrl: './category-result.component.html',
  styleUrls: ['./category-result.component.css']
})
export class CategoryResultComponent implements OnInit {
  bookList: Book[];
 // @Input() parentData: number;
  constructor(
    private route: ActivatedRoute,
    private service: BookService) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(
     () => {
       this.getData();
     }
   )    
    //   this.secondComponentFunction(this.parentData);
    // if (this.service.subsVar==undefined) {    
    //   this.service.subsVar = this.service.    
    //   invokeSecondComponentFunction.subscribe((id: number) => {    
    //     this.secondComponentFunction(id);
    //   });    
    //  } 
    }
    // secondComponentFunction(id: number){    
    //   this.service.getBooksByCategoryId(id).subscribe(data => this.bookList = data);
    // } 

    getData(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.service.getBooksByCategoryId(id)
      .subscribe(data => this.bookList = data);
    }
}
