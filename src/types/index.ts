export const enum Element {
	ROCK = 'rock',
	PAPER = 'paper',
	SCISSORS = 'scissors'
}

export type ElementItem = {
	value: Element;
	name: string;
	icon: string;
	defeats: Element;
};

export const enum Result {
	WIN = 'win',
	LOSE = 'lose',
	DRAW = 'draw'
}
