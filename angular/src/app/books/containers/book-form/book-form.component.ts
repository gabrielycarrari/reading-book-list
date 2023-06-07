import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    autor: ['', [Validators.required, Validators.maxLength(50)]],
    synopsis: ['', [Validators.required]],
    urlImage: ['', [Validators.maxLength(100)]],
    urlAmazon: [''],
    status: ['', [Validators.required, Validators.maxLength(8)]],
    numPages: [ 0, [Validators.required]],
    continuation: ['', [Validators.required, Validators.maxLength(50)]]
  })

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const book: Book = this.route.snapshot.data['book'];
    this.form.setValue({
      id: book.id,
      title: book.title,
      autor: book.autor,
      synopsis: book.synopsis,
      urlImage: book.urlImage,
      urlAmazon: book.urlAmazon,
      status: book.status,
      numPages: book.numPages,
      continuation: book.continuation
    })
  }

  onSubimit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Livro salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar livro.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')){
      return 'Campo Obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')){
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres`;
    }

    return 'Campo Inválido';
  }
}
