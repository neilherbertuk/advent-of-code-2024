/**
 * Advent of Code - Entry Point
 */
import {Day01} from './day-01';
import { Day02 } from "./day-02";

// Day 01
console.log('Day 01');
const day01 = new Day01('./src/day-01/input.txt');
const day1_response = day01.run();
console.log(`Total Distance: ${day1_response.totalDistance}`);
console.log(`Similarity Score: ${day1_response.similarityScore}`);

// Day 02
console.log('Day 02');
const day02 = new Day02('./src/day-02/input.txt');
const day2_response = day02.run();
console.log(`Safe Results:: ${day2_response}`);
