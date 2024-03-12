import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { Task } from 'src/models/task';

export class GetTimeHelper {
  static getTime(task: any): string {
    if (task.seconds >= 60) return Math.floor(task.seconds / 60) + ' min ' + (task.seconds % 60) + ' s';

    return task.seconds + ' s';
  }
}