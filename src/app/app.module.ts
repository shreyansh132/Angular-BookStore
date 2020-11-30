import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './service/book.service';
import {FormsModule} from '@angular/forms';
import { AddBookComponentsComponent } from './components/add-book-components/add-book-components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// const routes: Routes = [
//   {path: 'allBooks', component: BookGridComponent},
//   {path: 'byName/:name', component: BookGridComponent},
//   {path: 'byId/:id', component: BookGridComponent},
//   {path: 'byCategoryId/:category', component: BookGridComponent},
//   {path: '', redirectTo: '/allBooks', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponentComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBookComponentsComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    BookService 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
