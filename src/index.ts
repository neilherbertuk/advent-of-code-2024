/**
 * Advent of Code - Entry Point
 */
import {Day01} from './day-01';

// Day 01
console.log('Day 01');
const day01 = new Day01('./src/day-01/input.txt');
const response = day01.run();
console.log(`Total Distance: ${response.totalDistance}`);
console.log(`Similarity Score: ${response.similarityScore}`);
