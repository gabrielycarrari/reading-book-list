import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Book } from '../../model/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  books$: Observable<Book[]> | null = null;

  constructor (private booksService: BooksService) {
    this.books$ = this.booksService.list();
  }

  ngOnInit(): void { }
}
