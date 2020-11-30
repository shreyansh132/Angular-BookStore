import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../classes/book';
import { UserModel } from '../classes/user-model';
import { Category } from '../classes/category';
import { Subscription, Observable } from 'rxjs';
import { ImageResponse } from '../image-response';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  invokeFirstComponentFunction = new EventEmitter();    
  invokeSecondComponentFunction = new EventEmitter();    
  subsVar: Subscription;  
  private baseUrl = "http://localhost:9090/book-api/books/";
  private searchUrl = "http://localhost:9090/book-api/books/byName";
  private categoryUrl = "http://localhost:9090/book-api/books/category";
  // private customerUrl = "http://localhost:9090/book-api/customer/addCustomer";
  private userUrl = "http://localhost:9090/user";
  private imageUrl = "http://localhost:8080/image/get";

  constructor(private httpClient: HttpClient) { }

  getBooksByCategoryId(id : number) { 
    return this.httpClient.get<Book[]>("http://localhost:9090/book-api/books/byCategoryId/"+id); 
  }

  getImage() { 
    return this.httpClient.get<ImageResponse>(this.imageUrl);
  }

  getBooksByName(keyword: string) {
    return this.httpClient.get<Book[]>(this.baseUrl+"byName/"+keyword);
  }

  getBooks(){
    return this.httpClient.get<Book[]>(this.baseUrl+"/allBooks");
   }

   searchBooks(keyword:string){
    return this.httpClient.get<Book[]>(this.baseUrl+keyword);
   }

   getCategories(){
    return this.httpClient.get<Category[]>(this.categoryUrl);
   }  

  registerUser(user : UserModel){
    return this.httpClient.post<UserModel>(this.userUrl,user);
  }

  onFirstComponentButtonClick(name: string) {    
    this.invokeFirstComponentFunction.emit(name);    
  }   

  onSecondComponentButtonClick(id: number) {    
    this.invokeSecondComponentFunction.emit(id);    
  }
}
  