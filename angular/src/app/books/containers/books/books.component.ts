import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Book } from '../../model/book';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  books$: Observable<Book[]> | null = null;

  constructor (
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,) {
    this.books$ = this.booksService.list();
  }

  ngOnInit(): void { }

  onClick(book: Book) {
    console.log(book);
    this.router.navigate(['edit', book.id], {relativeTo: this.route});
  }
}
