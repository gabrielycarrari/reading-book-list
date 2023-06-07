import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {
  constructor(private http: HttpClient) {}

  getInformations(url: string): Promise<{ urlImage: string; title: string }> {
    return new Promise<{ urlImage: string; title: string }>((resolve, reject) => {
      this.http.get(url, { responseType: 'text' }).subscribe((response) => {
        const div = document.createElement('div');
        div.innerHTML = response;

        const urlImageElement = div.querySelector('#ebooksImgBlkFront') as HTMLImageElement;
        const titleElement = div.querySelector('#productTitle') as HTMLHeadingElement;

        const informations = {
          urlImage: urlImageElement.src,
          title: titleElement.innerText
        };

        resolve(informations);
      }, (error) => {
        reject(error);
      });
    });
  }
}
