import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9v68rbCckYwcIekRLOaVZ0Qdm3eeh1xCEkgpn3d7pParfLQ/formResponse';
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) { }

  post(name: string, schnitzel: string, potato: string, hours: number, minutes: number, seconds: number, url?: string, headers?: HttpHeaders) {
    if (url === undefined) url = this.url;
    if (headers === undefined) headers = this.headers;

    const formData = new FormData();

    formData.append('entry.1860183935', name);
    formData.append('entry.564282981', schnitzel);
    formData.append('entry.1079317865', potato);
    formData.append('entry.985590604', `${hours}:${minutes}:${seconds} `);

    return this.http.post(url, formData, { headers });
  }
}
