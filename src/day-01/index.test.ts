import {Day01} from './index';
import {getInput, mockInput} from '../utils';

let day: Day01;
let input: string[];

beforeEach(() => {
  const filename = 'input.txt';
  day = new Day01(filename);
  input = ['1   4', '4   5', '9   3', '10   4'];
  mockInput(filename, input);
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Advent of Code Day 01 - Part 1', () => {
  describe('calculateTotalDistance', () => {
    it('should return the correct answer for part 1', () => {
      const input: [number[], number[]] = [
        [1, 2, 3],
        [4, 3, 2],
      ];
      expect(day.calculateTotalDistance(input)).toEqual(5);
    });
  });

  describe('getInput', () => {
    it('should read input from a file', () => {
      const readInput = getInput('input.txt');
      expect(readInput).toEqual(input.join('\n'));
    });
  });

  describe('parseInput', () => {
    it('should parse input into a multi-dimensional array of numbers', () => {
      const readInput = getInput('input.txt');
      const parsedInput: [number[], number[]] = day.parseInput(readInput);
      expect(parsedInput).toEqual([
        [1, 4, 9, 10],
        [4, 5, 3, 4],
      ]);
    });
  });

  describe('orderInput', () => {
    it('should order input from lowest to highest', () => {
      const readInput = getInput('input.txt');
      const parsedInput: [number[], number[]] = day.parseInput(readInput);
      const orderedInput: [number[], number[]] = day.orderInput(parsedInput);
      expect(orderedInput).toEqual([
        [1, 4, 9, 10],
        [3, 4, 4, 5],
      ]);
    });
  });

  describe('getDistance', () => {
    it('should calculate the distance between 2 values passed in lowest to highest', () => {
      const input1 = 1;
      const input2 = 4;
      expect(day.getDistance(input1, input2)).toEqual(input2 - input1);
    });

    it('should calculate the distance between 2 values passed in highest to lowest', () => {
      const input1 = 4;
      const input2 = 1;
      expect(day.getDistance(input1, input2)).toEqual(input1 - input2);
    });

    it('should calculate the distance between 2 values passed in same value', () => {
      const input1 = 4;
      const input2 = 4;
      expect(day.getDistance(input1, input2)).toEqual(0);
    });
  });

  describe('orderArray', () => {
    it('should order an array of numbers from lowest to highest', () => {
      const input = [4, 1, 2, 3];
      const expected = [1, 2, 3, 4];
      expect(day.orderArray(input)).toEqual(expected);
    });
  });
});

describe('Advent of Code Day 01 - Part 2', () => {
  describe('getSimilarNumberCount', () => {
    it('should return the number of times a number appears in an array', () => {
      const input = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ];
      const expected = 2;
      expect(day.getSimilarNumberCount(1, input)).toEqual(expected);
    });
  });

  describe('calculateSimilarityScore', () => {
    it('should calculate the similarity score between 2 equal arrays', () => {
      const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = 55;
      expect(day.calculateSimilarityScore([input1, input2])).toEqual(expected);
    });

    it('should calculate the similarity score between 2 non-equal arrays', () => {
      const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const input2 = [1, 2, 3, 3, 3, 5, 3, 3, 2, 1];
      const expected = 26;
      expect(day.calculateSimilarityScore([input1, input2])).toEqual(expected);
    });
  });
});
