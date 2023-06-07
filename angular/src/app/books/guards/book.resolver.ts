import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Book } from '../model/book';



@Injectable({
  providedIn: 'root'
})
export class BookResolver  {
  constructor(private service: BooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({ id: '', title: '', autor: '', synopsis: '', urlImage: '', urlAmazon: '', status: '', numPages: 0, continuation: ''});
  }
}
