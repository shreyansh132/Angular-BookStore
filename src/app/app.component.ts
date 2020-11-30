import { Component, Input } from '@angular/core';
import { BookService } from './service/book.service';
import { ImageResponse } from './image-response';
import { Category } from './classes/category';
import { Book } from './classes/book';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  imageData: ImageResponse;
  category: Category[];
  books: Book[];
  catId: number = 1;
  expanded = false;
  navbarOpen = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(private bookService: BookService, private breakpointObserver: BreakpointObserver){}

  // getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.myService.getImage()
  //     .subscribe(data => this.imageData = data);
  // }

  ngOnInit(): void {
    this.bookService.getCategories().subscribe(data => this.category = data);
      // this.activatedRoute.paramMap.subscribe(() => {
      //   this.listBooks();
      // })   
  }

  clicked(id: number){
    this.catId = id;  
    //this.bookService.onSecondComponentButtonClick(id);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log("Working");
  }
}
