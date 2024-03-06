import { User } from './User';

export class ScavengerHunt implements User {
  date: Date;
  cutlets: number;
  potatoes: number;
  // from User
  firstName: string;
  lastName: string;

  constructor(
    date: Date,
    cutlets: number,
    potatoes: number,
    firstName: string,
    lastName: string
  ) {
    this.date = date;
    this.cutlets = cutlets;
    this.potatoes = potatoes;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
