import { Task } from './task';
import { TaskDetails } from './taskDetails';

describe('Task', () => {
  let task: Task;

  beforeEach(() => {
    task = new Task(1, 'Test Task', 60, 'Test Instruction', new TaskDetails('', ''));
  });

  describe('addPotato', () => {
    it('should return 1 if duration is greater than secondsUntilPotato', () => {
      const start: Date = new Date('2024-03-11T12:00:00');
      const end: Date = new Date('2024-03-11T12:01:01'); // 61 seconds duration

      const result: number = task.addPotato(start, end);

      expect(result).toEqual(1);
    });

    it('should return 0 if duration is less than or equal to secondsUntilPotato', () => {
      const start: Date = new Date('2024-03-11T12:00:00');
      const end: Date = new Date('2024-03-11T12:00:45'); // 45 seconds duration

      const result: number = task.addPotato(start, end);

      expect(result).toEqual(0);
    });
  });
});
