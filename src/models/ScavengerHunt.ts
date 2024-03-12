import { User } from './User';
import { Task } from './task';
import { TaskDetails } from './taskDetails';

export const taskUrls: any = {
  1: "/geoloaction",
  2: "/distance",
  3: "/qr-code",
  4: "/sensor",
  5: "/device-status",
  6: "/wlan"
}

export class ScavengerHunt {
  startDate: Date;
  user: User;
  tasks: Task[];

  constructor(
    date: Date,
    user: User
  ) {
    this.startDate = date;
    this.user = user;
    this.tasks = [
      new Task(
        1,
        'Standort',
        120,
        'Gehe zur grossen Schreibmaschine im Zuppa Buona!',
        new TaskDetails(
          'Lost in GPSlation',
          'Du musst dich zu den angegebenen Standorten begeben. Deine Anwesenheit wird automatisch erkannt. Diese Aufgabe braucht Standort Berechtigungen und der Standort des Gerätes muss aktiviert sein. '
        )
      ),
      new Task(
        2,
        'Strecke laufen',
        80,
        'Laufe 20m!',
        new TaskDetails(
          'Marathon oder Snickers?',
          'Du musst die angegebene Strecke laufen, um die Aufgabe zu erfüllen. Diese Aufgabe braucht Standort Berechtigungen und der Standort des Gerätes muss aktiviert sein.'
        )
      ),
      new Task(
        3,
        'QR-Code',
        30,
        'Scanne den QR-Code!',
        new TaskDetails(
          'Code Cracker 3000',
          'Diese Aufgabe braucht Kamera Berechtigungen. Du musst den richtigen QR-Code scannen. Ist der Code falsch oder nicht lesbar, wird es dir angezeigt. Wenn der richtige Code gescannt wurde, wird die Aufgabe ohne weiteres erfüllt.'
        )
      ),
      new Task(
        4,
        'Motion',
        20,
        'Das Handy soll nach unten zeigen!',
        new TaskDetails(
          'Umgedrehte Welt',
          'Richte dein Mobiltelefon so aus, dass das Handy auf dem Bildschirm nach unten zeigt.'
        )
      ),
      new Task(
        5,
        'Aufladen',
        30,
        'Lade dein Gerät auf!',
        new TaskDetails(
          'Lade-Lama',
          'Stecke dein Gerät an das Ladegerät und warte einen Moment.'
        )
      ),
      new Task(
        6,
        'WLAN',
        30,
        'Wechsele das WLAN Netzwerk!',
        new TaskDetails(
          'Der Verbindungsvoyeur',
          'Trenne deine WLAN Verbindung und verbinde dich nochmal mit einem beliebigen Netzwerk. Hotspot und mobile Daten funktionieren auch.'
        )
      ),
    ];
  }
}
