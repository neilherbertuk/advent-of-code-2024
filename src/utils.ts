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

export function mockInput(filename: string, input: string[]) {
  // Mock Input
  jest.mock('fs');
  const mockReadFileSync = jest.fn();
  (fs.readFileSync as unknown as jest.Mock) = mockReadFileSync;

  // Define mock implementation
  mockReadFileSync.mockImplementation((filePath: string, encoding: string) => {
    if (filePath === filename && encoding === 'utf-8') {
      return input.join('\n');
    }
    throw new Error('File not found');
  });
}
