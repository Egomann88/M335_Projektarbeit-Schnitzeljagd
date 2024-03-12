import { TaskDetails } from './taskDetails';

export class Task {
  id: number;
  name: string;
  timeStart?: Date;
  timeEnd?: Date;
  steaks: number;
  potatoes: number;
  isCompleted: boolean;
  secondsUntilPotato: number;
  mainInstruction: string;
  details: TaskDetails;

  // timer
  interval?: any;
  play: boolean = false;
  seconds: number = 0;

  constructor(id: number, name: string, secondsUntilPotato: number, mainInstruction: string, details: TaskDetails) {
    this.id = id;
    this.name = name;
    this.steaks = 1;
    this.potatoes = 0;
    this.isCompleted = false;
    this.secondsUntilPotato = secondsUntilPotato;
    this.mainInstruction = mainInstruction;
    this.details = details;
  }

  public start() {
    this.timeStart = new Date();
    this.startTimer();
  }

  private startTimer() {
    this.play = true;
    this.interval = setInterval(async () => {
      this.seconds++;
    }, 1000);
  }

  private pauseTimer() {
    if (this.interval == undefined) clearInterval(this.interval);
    this.play = false;
  }

  completeTask() {
    this.pauseTimer();
    this.timeEnd = new Date();

    if (this.timeStart === undefined) throw new Error("timeStart is undefined");

    this.potatoes = this.addPotato(this.timeStart, this.timeEnd);

    this.isCompleted = true;
  }

  addPotato(start: Date, end: Date = new Date()) {
    const durationInSeconds = (end.getTime() - start.getTime()) / 1000;

    if (durationInSeconds > this.secondsUntilPotato) return 1;

    return 0;
  }
}
