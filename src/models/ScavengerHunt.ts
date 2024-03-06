import { User } from './User';

export class ScavengerHunt{
  date: Date;
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
    this.date = date;
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
