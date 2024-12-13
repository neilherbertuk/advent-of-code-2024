import * as fs from 'node:fs';

export interface AoCDay {
  run(): void | string | number | Record<string, number>;
}

/**
 * Get input from file
 *
 * @param input string - Path of the input file to read
 */
export function getInput(input: string): string {
  return fs.readFileSync(input, 'utf-8');
}
