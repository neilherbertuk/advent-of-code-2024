import {AoCDay} from '../utils';
import * as fs from 'node:fs';

export class Day01 implements AoCDay {
  private inputFilename: string;
  constructor(inputFileName: string) {
    console.log('Day 01');
    this.inputFilename = inputFileName;
    console.log(`Processing results for ${inputFileName}`);
  }

  public run(): number {
    const input = this.getInput(this.inputFilename);
    const parseInput: [number[], number[]] = this.parseInput(input);
    const orderedInput: [number[], number[]] = this.orderInput(parseInput);
    let distance = 0;
    for (let i = 0; i < orderedInput[0].length; i++) {
      if (orderedInput[0][i] && orderedInput[1][i]) {
        const difference = this.getDistance(
          orderedInput[0][i],
          orderedInput[1][i],
        );
        distance += difference;
        console.log(
          `Distance between ${orderedInput[0][i]} and ${orderedInput[1][i]} is ${difference}`,
        );
      }
    }
    return distance;
  }

  /**
   * Get input from file
   *
   * @param input string - Path of the input file to read
   */
  public getInput(input: string): string {
    return fs.readFileSync(input, 'utf-8');
  }

  /**
   * Get distance between two numbers
   *
   * @param input1 number - First number
   * @param input2 number - Second number
   * @returns number - Distance between the two numbers
   */
  public getDistance(input1: number, input2: number): number {
    let orderedInput: number[];
    if (input1 > input2) {
      orderedInput = [input2, input1];
    } else {
      orderedInput = [input1, input2];
    }
    return orderedInput[1] - orderedInput[0];
  }

  /**
   * Order an array of numbers
   *
   * @param input number[] - Array of numbers to order
   * @returns number[] - Ordered array of numbers
   */
  public orderArray(input: number[]): number[] {
    return input.sort((a, b) => a - b);
  }

  /**
   * Order an array of arrays of numbers
   *
   * @returns [number[], number[]] - Ordered array of arrays of numbers
   * @param input
   */
  public orderInput(input: [number[], number[]]): [number[], number[]] {
    return [this.orderArray(input[0]), this.orderArray(input[1])];
  }

  /**
   * Parse input from file
   *
   * @param input string - Input to parse
   * @returns [number[], number[]] - Parsed input
   */
  public parseInput(input: string): [number[], number[]] {
    const array1: number[] = [];
    const array2: number[] = [];
    input.split('\n').map(line => {
      do {
        line = line.replace(/ {2}/g, ' ');
      } while (line.includes('  '));
      line.split(' ').map((number, index) => {
        if (index === 0) {
          array1.push(parseInt(number));
        } else {
          array2.push(parseInt(number));
        }
      });
    });
    return [array1, array2];
  }
}
