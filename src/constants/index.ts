import type { ElementItem } from '@/types';
import { Element } from '@/types';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';

export const ELEMENTS: ElementItem[] = [
	{
		value: Element.ROCK,
		icon: rockIcon,
		name: 'Rock',
		defeats: Element.SCISSORS
	},
	{
		value: Element.PAPER,
		icon: paperIcon,
		name: 'Paper',
		defeats: Element.ROCK
	},
	{
		value: Element.SCISSORS,
		icon: scissorsIcon,
		name: 'Scissors',
		defeats: Element.PAPER
	}
];
