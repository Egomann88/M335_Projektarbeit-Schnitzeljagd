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

    ]
  }
}
