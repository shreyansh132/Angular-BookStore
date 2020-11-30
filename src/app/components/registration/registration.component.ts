import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/classes/user-model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponentComponent implements OnInit {
 
  topics = ['Technology Books','Novels','Entratenment','Course','Engineering','Medical','Others'];
  userModel = new UserModel(2,"Shreyansh","Jain","8358986839","shreyanshj132@gmail.com","1234",1,"Dec 20, 9:30 AM");
  
  constructor(private service : BookService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    // console.log(this.userModel);
    this.service.registerUser(this.userModel)
    .subscribe(
      data => console.log("success",data),
      error => console.log("error", error)
    );
   }
}
