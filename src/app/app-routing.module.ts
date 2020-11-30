import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { SearchResultComponentComponent } from './components/search-result-component/search-result-component.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { RegistrationComponentComponent } from './components/registration/registration.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CategoryResultComponent } from './components/category-result/category-result.component';

const routes: Routes = [
  {path: 'allBooks', component: BookGridComponent},
  {path: 'byName/:name', component: SearchResultComponentComponent},
  {path: 'byId/:id', component: BookGridComponent},
  {path: 'byCategoryId/:category', component: CategoryResultComponent},
  {path: 'registration', component: RegistrationComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: '', redirectTo: '/allBooks', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = 
  [BookGridComponent
  ,PageNotFoundComponentComponent
  ,SearchResultComponentComponent
  ,SearchComponentComponent
  ,RegistrationComponentComponent
  ,LoginComponentComponent
  ,CategoryResultComponent
]
