# Advent of Code 2024

This is my attempt at the Advent of Code 2024

If you want to try out my code simply do the following;

```bash
git clone https://github.com/neilherbertuk/advent-of-code-2024.git
cd advent-of-code-2024
nvm use 20
npm i
```

Each day has unit and feature tests which can be run using

```bash
npm run test
```

At the moment, you can run all days using the following command, however, you will need to add our own input within the specific day folder under `./src` as `input.txt`

```bash
npm run start
```

## Day 1

### Part 1

Attempted 11/12/2024

Take an input which contains 2 lists of numbers, sort these 2 lists from lowest to highest and get the total distance between each pair.

Submitted 11/12/2024 - first attempt correct

### Part 2

Attempted 11/12/2024

Take the left list, go through each number checking how many times it appears in the right list and times it by that (left: 1 2 3 right: 2 2 2). 1 * 0 = 0, 2 + 3 = 6, 3 * 0 = 0. Add these together.

Submitted 11/12/2024 - first attempt correct

## Day 2

### Part 1

Attempted 13/12/2024

Take multiple lines of readings seperated by a space and analyse to see if they are safe or unsafe readings based on a ruleset.

Submitted 11/12/2024 - second attempt correct (didn't account for empty lines)
