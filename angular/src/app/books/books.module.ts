import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './containers/books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        BooksComponent,
        BooksListComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        AppMaterialModule,
        SharedModule
    ]
})
export class BooksModule { }
