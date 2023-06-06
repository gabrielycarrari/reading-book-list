import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Book } from '../../model/book';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements AfterViewInit{
  @Input() books: Book[] = [];
  @Output() click = new EventEmitter(false);

  readonly displayedColumns = ['title', 'autor', 'status', 'numPages', 'continuation'];

  dataSource = new MatTableDataSource<Book>(this.books);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Book>(this.books);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTotalNumPages() {
    return this.books.map(b => b.numPages).reduce((acc, value) => acc + value, 0);
  }

  getTotalBooks() {
    return this.books.length;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onClick(book: Book) {
    console.log(book);
    this.click.emit(book);
  }
}
