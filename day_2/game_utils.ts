const AI_ROCK = "A";
const AI_PAPER = "B";
const AI_SCISSORS = "C";

const PLAYER_ROCK = "X";
const PLAYER_PAPER = "Y";
const PLAYER_SCISSORS = "Z";

export function get_play_score(play: string): number {
  switch (play) {
    case PLAYER_ROCK:
      return 1;
      break;
    case PLAYER_PAPER:
      return 2;
      break;
    case PLAYER_SCISSORS:
      return 3;
      break;
    // NO default because data is controlled
  }
}

export function get_outcome_score(game: string[]): number {
  const ai = game[0];
  const signal = game[1];

  // ROCK --------------------------------------------
  // MUST LOOSE TO AI rock playing scissors
  if (ai == AI_ROCK && signal == "X") {
    return 0 + get_play_score(PLAYER_SCISSORS);
  }
  // MUST DRAW TO AI rock playing ROCK
  if (ai == AI_ROCK && signal == "Y") {
    return 3 + get_play_score(PLAYER_ROCK);
  }
  // MUST BEAT AI rock playing PAPER
  if (ai == AI_ROCK && signal == "Z") {
    return 6 + get_play_score(PLAYER_PAPER);
  }

  // PAPER --------------------------------------------
  // MUST LOOSE TO AI paper playing ROCK
  if (ai == AI_PAPER && signal == "X") {
    return 0 + get_play_score(PLAYER_ROCK);
  }
  // MUST DRAW TO AI paper playing PAPER
  if (ai == AI_PAPER && signal == "Y") {
    return 3 + get_play_score(PLAYER_PAPER);
  }
  // MUST BEAT AI paper playing scissors
  if (ai == AI_PAPER && signal == "Z") {
    return 6 + get_play_score(PLAYER_SCISSORS);
  }

  // SCISSORS --------------------------------------------
  // MUST LOOSE TO AI SCISSORS playing PAPER
  if (ai == AI_SCISSORS && signal == "X") {
    return 0 + get_play_score(PLAYER_PAPER);
  }
  // MUST DRAW TO AI SCISSORS playing scissors
  if (ai == AI_SCISSORS && signal == "Y") {
    return 3 + get_play_score(PLAYER_SCISSORS);
  }
  // MUST BEAT AI SCISSORS playing ROCK
  if (ai == AI_SCISSORS && signal == "Z") {
    return 6 + get_play_score(PLAYER_ROCK);
  }
}
