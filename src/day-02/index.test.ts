import { Day02, DIRECTION, STATUS } from "./index";
import {mockInput} from '../utils';

let day: Day02;
let input: string[];
let expectedResults: STATUS[];
const filename = 'input.txt';

beforeEach(() => {
  day = new Day02(filename);
  input = [
    '7 6 4 2 1',
    '1 2 7 8 9',
    '9 7 6 2 1',
    '1 3 2 4 5',
    '8 6 4 4 1',
    '1 3 6 7 9',
  ];
  expectedResults = [
    STATUS.SAFE,
    STATUS.UNSAFE,
    STATUS.UNSAFE,
    STATUS.UNSAFE,
    STATUS.UNSAFE,
    STATUS.SAFE,
  ];
  mockInput(filename, input);
});
describe('Advent of Code Dat 02 - part 1', () => {
  describe('analyseReading', () => {
    it('should return the expected results', () => {
      input.forEach((input, index) => {
        const result = day.analyseReading(input);
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('getDirection', () => {
    it('should return the expected direction', () => {
      expect(day.getDirection(1, 2)).toBe(DIRECTION.INCREASE);
      expect(day.getDirection(2, 1)).toBe(DIRECTION.DECREASE);
      expect(day.getDirection(1, 1)).toBe(DIRECTION.SAME);
    });
  });

  describe('run', () => {
    it('should return the expected result', () => {
      const result = day.run();
      expect(result).toBe(2);
    });
  });
});
