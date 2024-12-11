import {Day01} from './index';
import * as fs from 'fs';

let day: Day01;
let input: string[];

function mockInput() {
  // Mock Input
  input = ['1   4', '4   5', '9   3', '10   4'];
  jest.mock('fs');
  const mockReadFileSync = jest.fn();
  (fs.readFileSync as unknown as jest.Mock) = mockReadFileSync;

  // Define mock implementation
  mockReadFileSync.mockImplementation((filePath: string, encoding: string) => {
    if (filePath === 'input.txt' && encoding === 'utf-8') {
      return input.join('\n');
    }
    throw new Error('File not found');
  });
}

describe('Advent of Code Day 01', () => {
  beforeEach(() => {
    day = new Day01('input.txt');
    mockInput();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('run', () => {
    it('should return the correct answer for part 1', () => {
      const answer = day.run();
      expect(answer).toEqual(12);
    });
  });

  describe('getInput', () => {
    it('should read input from a file', () => {
      const readInput = day.getInput('input.txt');
      expect(readInput).toEqual(input.join('\n'));
    });
  });

  describe('parseInput', () => {
    it('should parse input into a multi-dimensional array of numbers', () => {
      const readInput = day.getInput('input.txt');
      const parsedInput: [number[], number[]] = day.parseInput(readInput);
      expect(parsedInput).toEqual([
        [1, 4, 9, 10],
        [4, 5, 3, 4],
      ]);
    });
  });

  describe('orderInput', () => {
    it('should order input from lowest to highest', () => {
      const readInput = day.getInput('input.txt');
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
