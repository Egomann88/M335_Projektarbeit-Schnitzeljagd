

export class Task{
  id: number;
  name: string;
  timeStart? : Date;
  timeEnd?: Date;
  steaks: number;
  potatoes: number;
  isCompleted: boolean;

  constructor(id:number, name: string) {
    this.id = id;
    this.name = name;
    this.steaks = 0;
    this.potatoes = 0;
    this.isCompleted = false;
  }

  completeTask(start: Date, end: Date, steaks: number, potatoes: number){
    this.timeStart = start;
    this.timeEnd = end;
    this.steaks = steaks;
    this.potatoes = potatoes;
    this.isCompleted = true;
  }
}
