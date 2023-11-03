import * as readline from 'readline';

type Fish = { name: string; rarity: number };
type CastResult = 'nothing' | 'fish' | 'junk';
type GameState = 'fishing' | 'end';

interface GameContext {
  gameState: GameState;
  fishes: Fish[];
  caught: Fish[];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fishes: Fish[] = [
  { name: 'Carp', rarity: 50 },
  { name: 'Largemouth bass', rarity: 30 },
  { name: 'Catfish', rarity: 15 },
  { name: 'Bluegill', rarity: 1 },
];

let context: GameContext = {
  gameState: 'fishing',
  fishes: fishes,
  caught: [],
};

function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function castLine(): CastResult {
  let chance = Math.random() * 100;
  if (chance < 5) {
    return 'junk';
  } else if (chance < 55) {
    return 'nothing';
  } else {
    return 'fish';
  }
}

function catchFish(): Fish | null {
  let chance = Math.random() * 100;
  let cumulative = 0;

  for (const fish of context.fishes) {
    cumulative += fish.rarity;
    if (chance <= cumulative) {
      return fish;
    }
  }
  return null;
}

async function playGame() {
  console.log("Let's go fishing!");

  while (context.gameState === 'fishing') {
    await askQuestion('enter to cast!');

    const result = castLine();

    if (result === 'fish') {
      const fish = catchFish();
      if (fish) {
        console.log(`You caught a ${fish.name}!`);
        context.caught.push(fish);
      }
    } else if (result === 'junk') {
      console.log('You pulled up some junk...');
    } else {
      console.log('No bite at this time');
    }

    const keepGoing = await askQuestion('Keep fishing? (yes/no): ');
    if (keepGoing.trim().toLowerCase() !== 'yes') {
      context.gameState = 'end';
    }
  }

  console.log('Done for the day. You caught:');
  context.caught.forEach((fish) => console.log(`- ${fish.name}`));
  rl.close();
}

playGame();
