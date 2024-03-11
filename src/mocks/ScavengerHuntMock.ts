import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { User } from 'src/models/User';

export const SCAVENGERHUNTS: ScavengerHunt[] = [
  new ScavengerHunt(new Date(2024, 5, 3), new User('John', 'Doe')),
  new ScavengerHunt(new Date(2024, 5, 2), new User('Jane', 'Doe')),
  new ScavengerHunt(new Date(2024, 5, 1), new User('John', 'Smith')),
  new ScavengerHunt(new Date(2024, 4, 20), new User('Jane', 'Smith')),
  new ScavengerHunt(new Date(2024, 4, 18), new User('John', 'Johnson')),
  new ScavengerHunt(new Date(2024, 4, 15), new User('Jane', 'Johnson')),
  new ScavengerHunt(new Date(2024, 4, 12), new User('John', 'Williams')),
  new ScavengerHunt(new Date(2024, 4, 8), new User('Jane', 'Williams')),
  new ScavengerHunt(new Date(2024, 3, 18), new User('John', 'Jones')),
  new ScavengerHunt(new Date(2024, 2, 10), new User('Jane', 'Jones')),
];
