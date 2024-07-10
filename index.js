// Destructuring for animal sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Destructuring for traditional animal names
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little } = animalNames;

// Destructuring for traditional animal colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

// Destructuring for rainbow color variables using color names
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Destructuring for rainbow color variables using initials
const [r, o, y, g, b, , v] = rainbowColors;

// Destructuring to declare Indigo using `indg`
const [, , , , , indg] = rainbowColors;

// Object destructuring to assign variables using the keys as variable names
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { muppetName, color, song, job, partner } = muppet;

// Nested object destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  song2: "Moving Right Along",
  song4: "I Hope That Something Better Comes Along",
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};
const { song2, song4, nestedJob, nestedPartner } = nestedMuppet;
