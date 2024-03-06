import { User } from './User';
import { Task } from './task';

export const taskUrls : any = {
  1: "/geoloaction",
  2: "",
  3: "/qr-code",
  4: "",
  5: "/device-status",
  6: "/wlan"
}

export class ScavengerHunt {
  startDate: Date;
  endDate?: Date;
  cutlets: number;
  potatoes: number;
  user: User
  tasks: Task[]

  constructor(
    date: Date,
    cutlets: number,
    potatoes: number,
    user: User
  ) {
    this.startDate = date;
    this.cutlets = cutlets;
    this.potatoes = potatoes;
    this.user = user;
    this.tasks = [
      new Task(1, 'Standort'),
      new Task(2, 'Strecke laufen'),
      new Task(3, 'QR-Code'),
      new Task(4, 'Pusten'),
      new Task(5, 'Aufladen'),
      new Task(6, 'WLAN'),
    ]
  }
}
