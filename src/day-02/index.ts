import { AoCDay, getInput } from "../utils";

export enum STATUS {
  SAFE = 'Safe',
  UNSAFE = 'Unsafe',
}

export enum DIRECTION {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  SAME = 'same',
}

export interface IReading {
  readings: number[];
  directions: DIRECTION[];
  difference: number[];
  raw: string;
  status: STATUS;
}

export class Day02 implements AoCDay {
  private inputFilename: string;
  constructor(inputFileName: string) {
    console.log('Day 02');
    this.inputFilename = inputFileName;
    console.log(`Processing results for ${inputFileName}`);
  }

  /**
   * Entry Point
   */
  public run(): number {
    const input = getInput(this.inputFilename).split('\n');
    const results = input
      .filter(reading => reading)
      .map(reading => this.analyseReading(reading));
    console.log(`Total Readings: ${results.length}`);
    console.log(
      `Safe Readings: ${results.filter(result => result === STATUS.SAFE).length}`,
    );
    console.log(
      `UnSafe Readings: ${results.filter(result => result === STATUS.UNSAFE).length}`,
    );
    return results.filter(result => result === STATUS.SAFE).length;
  }

  public analyseReading(input: string): STATUS {
    console.log(`Processing readings ${input}`);
    const splitInput: number[] = input.split(' ').map(int => parseInt(int));

    const readings: Omit<IReading, 'status'> = {
      readings: splitInput,
      raw: input,
      directions: splitInput.slice(0, -1).map((int, index) => {
        return this.getDirection(int, splitInput[index + 1]);
      }),
      difference: splitInput.slice(0, -1).map((int, index) => {
        const sorted = [int, splitInput[index + 1]].sort((a, b) => a - b);
        return sorted[1] - sorted[0];
      }),
    };
    return this.getStatus(readings);
  }

  /**
   * Get status of the reading
   *
   * @param readings
   * @returns STATUS
   * @private
   */
  private getStatus(readings: Omit<IReading, 'status'>) {
    if (readings.difference.some(int => int >= 4 || int === 0)) {
      console.log('Reading exceed safe changes');
      return STATUS.UNSAFE;
    } else if (
      readings.directions.every(
        direction => direction === DIRECTION.INCREASE,
      ) ||
      readings.directions.every(direction => direction === DIRECTION.DECREASE)
    ) {
      return STATUS.SAFE;
    }
    return STATUS.UNSAFE;
  }

  /**
   * Get direction of the reading
   *
   * @param reading1
   * @param reading2
   * @returns DIRECTION
   * @public
   */
  public getDirection(reading1: number, reading2: number): DIRECTION {
    return reading1 === reading2
      ? DIRECTION.SAME
      : reading1 < reading2
        ? DIRECTION.INCREASE
        : DIRECTION.DECREASE;
  }
}
