import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './AlertService';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9v68rbCckYwcIekRLOaVZ0Qdm3eeh1xCEkgpn3d7pParfLQ/formResponse';
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient, private alertService: AlertService) { }

  post(name: string, schnitzel: string, potato: string, hours: number, minutes: number, seconds: number, url?: string, headers?: HttpHeaders) {
    try {
      if (url === undefined) url = this.url;
      if (headers === undefined) headers = this.headers;

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      const body =
        `entry.1860183935=${name}` + // Name
        `&entry.564282981=${schnitzel}` + // Schnitzel
        `&entry.1079317865=${potato}` + // Potatoes
        `&entry.985590604=${formattedTime}`; // Duration

      this.http.post(url, body, { headers }).subscribe();
    } catch (e) {
      console.error(e);
      this.alertService.openErrorAlert("Beim Senden an das Backend (Google Tabelle) ist ein Fehler aufgetreten.");
    }
  }
}
