import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
  displayedColumns = ['title', 'autor', 'status', 'numPages', 'continuation'];
  books: Book[] = [
    {
      id: '1',
      title: 'Com amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'readed',
      numPages: 371,
      continuation: '',
    },
    {
      id: '2',
      title: 'ACom amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'to-read',
      numPages: 371,
      continuation: '',
    },
    {
      id: '3',
      title: 'BCom amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'reading',
      numPages: 371,
      continuation: '',
    },
    {
      id: '4',
      title: 'DCom amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'readed',
      numPages: 371,
      continuation: '',
    },
    {
      id: '5',
      title: 'FCom amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'readed',
      numPages: 371,
      continuation: '',
    },
    {
      id: '6',
      title: 'GCom amor, Anne',
      autor: 'AK Souza',
      synopsis: 'Anne Cavalcanti é uma garota que sempre pode ter tudo o que desejava...',
      urlImage: '',
      urlAmazon: '',
      status: 'readed',
      numPages: 371,
      continuation: '',
    }
  ];

  dataSource = new MatTableDataSource<Book>(this.books);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
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
}
