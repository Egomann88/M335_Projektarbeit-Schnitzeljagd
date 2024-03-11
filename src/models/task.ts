import { TaskDetails } from './taskDetails';

export class Task {
  id: number;
  name: string;
  timeStart?: Date;
  timeEnd?: Date;
  steaks: number;
  potatoes: number;
  isCompleted: boolean;
  mainInstruction: string;
  details: TaskDetails;

  constructor(id: number, name: string, mainInstruction: string, details: TaskDetails) {
    this.id = id;
    this.name = name;
    this.steaks = 0;
    this.potatoes = 0;
    this.isCompleted = false;
    this.mainInstruction = mainInstruction;
    this.details = details;
  }

  completeTask(start: Date, end: Date, steaks: number, potatoes: number) {
    this.timeStart = start;
    this.timeEnd = end;
    this.steaks = steaks;
    this.potatoes = potatoes;
    this.isCompleted = true;
  }
}
