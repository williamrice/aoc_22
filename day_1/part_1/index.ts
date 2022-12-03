#! /usr/bin/env node
import * as fs from "fs";

const data = fs.readFileSync("input_prod.txt", "utf8").split("\n\n");
var total = [];
data.forEach((e) => {
  let sum = 0;
  e.split("\n").forEach((e) => (sum += parseInt(e)));
  total.push(sum);
});
const sorted = total.sort((a, b) => {
  return a - b;
});
console.log(sorted.at(-1));
