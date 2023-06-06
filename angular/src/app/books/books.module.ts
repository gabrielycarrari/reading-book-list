import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './containers/books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from "../shared/shared.module";
import { BookFormComponent } from './containers/book-form/book-form.component';


@NgModule({
    declarations: [
        BooksComponent,
        BooksListComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        AppMaterialModule,
        SharedModule
    ]
})
export class BooksModule { }
