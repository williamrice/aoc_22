#! /usr/bin/env node
import * as fs from "fs";

const data = fs
  .readFileSync("./day_3/part_1/input_prod.txt", "utf8")
  .split("\n");

const UPPER_OFFSET: number = 38;
const LOWER_OFFSET: number = 96;

var sum = 0;

data.forEach((e) => {
  e.split("\n").forEach((s) => {
    var matched_list = [];

    const first_half: string | any = s.substring(0, s.length / 2);
    const second_half: string | any = s.substring(s.length / 2);
    for (let i in first_half) {
      if (matched_list.includes(first_half[i])) {
        break;
      }
      if (second_half.includes(first_half[i])) {
        matched_list.push(first_half[i]);
        console.log(`Match : ${first_half[i]} - ${second_half}`);
        if (first_half[i].toUpperCase() === first_half[i]) {
          sum += first_half[i].charCodeAt(0) - UPPER_OFFSET;
        } else {
          sum += first_half[i].charCodeAt(0) - LOWER_OFFSET;
        }
      }
    }
  });
});

console.log(sum);
