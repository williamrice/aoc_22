#! /usr/bin/env node
import * as fs from "fs";

const data = fs
  .readFileSync("./day_3/part_2/input_prod.txt", "utf8")
  .split("\n");

const UPPER_OFFSET: number = 38;
const LOWER_OFFSET: number = 96;

var sum = 0;
var seek = 0;
while (data[seek]) {
  let matched_chars = [];
  const first: any = data[seek];
  seek++;
  const second: any = data[seek];
  seek++;
  const third: any = data[seek];
  seek++;

  if (first !== null || second !== null || !third == null) {
  }
  for (let i in first) {
    const c = first[i];
    if (!matched_chars.includes(c)) {
      if (second.includes(c) && third.includes(c)) {
        matched_chars.push(c);
        if (c.toUpperCase() === c) {
          sum += c.charCodeAt(0) - UPPER_OFFSET;
        } else {
          sum += c.charCodeAt(0) - LOWER_OFFSET;
        }
      }
    }
  }
}

console.log(sum);
