#! /usr/bin/env node
import * as fs from "fs";
import { get_outcome_score, get_play_score } from "./game_utils";

const data = fs.readFileSync("./day_2/input_prod.txt", "utf8").split("\n");

var total_score = 0;

data.forEach((e) => {
  const game = e.split(" ");
  const game_score = get_outcome_score(game);
  total_score += game_score;
});

console.log(total_score);
