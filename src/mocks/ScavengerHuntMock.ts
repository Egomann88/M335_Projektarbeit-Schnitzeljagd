import { ScavengerHunt } from 'src/models/ScavengerHunt';

export const SCAVENGERHUNTS: ScavengerHunt[] = [
  new ScavengerHunt(new Date(2024, 5, 3), 5, 4, 'John', 'Doe'),
  new ScavengerHunt(new Date(2024, 5, 2), 2, 1, 'Jane', 'Doe'),
  new ScavengerHunt(new Date(2024, 5, 1), 4, 3, 'John', 'Smith'),
  new ScavengerHunt(new Date(2024, 4, 20), 5, 6, 'Jane', 'Smith'),
  new ScavengerHunt(new Date(2024, 4, 18), 6, 6, 'John', 'Johnson'),
  new ScavengerHunt(new Date(2024, 4, 15), 6, 2, 'Jane', 'Johnson'),
  new ScavengerHunt(new Date(2024, 4, 12), 6, 5, 'John', 'Williams'),
  new ScavengerHunt(new Date(2024, 4, 8), 6, 4, 'Jane', 'Williams'),
  new ScavengerHunt(new Date(2024, 3, 18), 5, 3, 'John', 'Jones'),
  new ScavengerHunt(new Date(2024, 2, 10), 1, 1, 'Jane', 'Jones'),
];
