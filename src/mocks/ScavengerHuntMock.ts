import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { User } from 'src/models/User';

export const SCAVENGERHUNTS: ScavengerHunt[] = [
  new ScavengerHunt(new Date(2024, 5, 3), 5, 4, new User('John', 'Doe')),
  new ScavengerHunt(new Date(2024, 5, 2), 2, 1, new User('Jane', 'Doe')),
  new ScavengerHunt(new Date(2024, 5, 1), 4, 3, new User('John', 'Smith')),
  new ScavengerHunt(new Date(2024, 4, 20), 5, 6, new User('Jane', 'Smith')),
  new ScavengerHunt(new Date(2024, 4, 18), 6, 6, new User('John', 'Johnson')),
  new ScavengerHunt(new Date(2024, 4, 15), 6, 2, new User('Jane', 'Johnson')),
  new ScavengerHunt(new Date(2024, 4, 12), 6, 5, new User('John', 'Williams')),
  new ScavengerHunt(new Date(2024, 4, 8), 6, 4, new User('Jane', 'Williams')),
  new ScavengerHunt(new Date(2024, 3, 18), 5, 3, new User('John', 'Jones')),
  new ScavengerHunt(new Date(2024, 2, 10), 1, 1, new User('Jane', 'Jones')),
];
