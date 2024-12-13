import { AoCDay, getInput } from "../utils";

export class Day01 implements AoCDay {
  private inputFilename: string;
  constructor(inputFileName: string) {
    console.log('Day 01');
    this.inputFilename = inputFileName;
    console.log(`Processing results for ${inputFileName}`);
  }

  /**
   * Entry Point
   */
  public run(): {totalDistance: number; similarityScore: number} {
    const input = getInput(this.inputFilename);
    const parseInput: [number[], number[]] = this.parseInput(input);
    const orderedInput: [number[], number[]] = this.orderInput(parseInput);
    const totalDistance = this.calculateTotalDistance(orderedInput);
    const similarityScore = this.calculateSimilarityScore(orderedInput);
    return {totalDistance, similarityScore};
  }

  /**
   * Calculate Total Distance
   *
   * @param input
   */
  public calculateTotalDistance(input: [number[], number[]]) {
    let distance = 0;
    for (let i = 0; i < input[0].length; i++) {
      if (input[0][i] && input[1][i]) {
        const difference = this.getDistance(input[0][i], input[1][i]);
        distance += difference;
        console.log(
          `Distance between ${input[0][i]} and ${input[1][i]} is ${difference}`,
        );
      }
    }
    return distance;
  }

  /**
   * Calculate Similarity Score
   * @param input
   */
  public calculateSimilarityScore(input: [number[], number[]]) {
    let score = 0;
    input[0].forEach(number => {
      if (number) {
        const count = this.getSimilarNumberCount(number, input[1]);
        console.log(
          `Number ${number} appears ${count} times in the second array`,
        );
        score += number * count;
      }
    });
    return score;
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
   * Get the number of times a number appears in an array
   *
   * @param needle number - Number to search for
   * @param haystack number[] - Array to search in
   * @returns number - Number of times the number appears in the array
   */
  public getSimilarNumberCount(needle: number, haystack: number[]) {
    let count = 0;
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        count++;
      }
    }
    return count;
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
