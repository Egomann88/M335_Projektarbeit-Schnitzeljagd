export class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.id = 0;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
