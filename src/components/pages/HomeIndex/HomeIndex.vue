<template>
	<div
		class="p-homeIndex container mx-auto flex flex-col items-center justify-center gap-10 py-0 px-4">
		<h1 class="text-center uppercase sm:text-4xl md:text-7xl">
			Rock, Paper, Scissors game
		</h1>
		<div
			v-if="resultMessage"
			class="flex-col flex-wrap items-center justify-center gap-4">
			<h3 class="text-2xl">{{ resultMessage }}</h3>
			<button class="bg-rosewater p-4" @click="playAgain">Play again</button>
			<div class="flex gap-3">
				<ElementCard
					v-for="element in picks"
					:key="element.value"
					:element="element" />
			</div>
		</div>
		<div v-else class="flex flex-wrap items-center justify-center gap-5">
			<ElementCard
				v-for="element in ELEMENTS"
				:key="element.value"
				:element="element"
				clickable
				@click="onElementCardClick" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ELEMENTS } from '@/constants';
	import type { ElementItem } from '@/types';
	import { Result } from '@/types';
	import ElementCard from 'atoms/ElementCard';
	import { reactive, ref } from 'vue';

	const resultMessages: Record<Result, string> = {
		[Result.WIN]: 'You win',
		[Result.LOSE]: 'You lose',
		[Result.DRAW]: 'Draw'
	};

	const picks: ElementItem[] = reactive([]);
	const resultMessage = ref<string | null>(null);

	const getCpuRandomPick = (): ElementItem => {
		const idx = Math.trunc(Math.random() * ELEMENTS.length);
		return ELEMENTS[idx];
	};
	const isUserWinner = (
		userElement: ElementItem,
		cpuElement: ElementItem
	): boolean => userElement.defeats === cpuElement.value;
	const gotUserTie = (userElement: ElementItem, cpuElement: ElementItem) =>
		userElement.value === cpuElement.value;

	const onElementCardClick = (element: ElementItem): void => {
		const cpuPick = getCpuRandomPick();
		picks.push(element, cpuPick);
		if (isUserWinner(element, cpuPick)) {
			resultMessage.value = resultMessages.win;
		} else if (gotUserTie(element, cpuPick)) {
			resultMessage.value = resultMessages.draw;
		} else {
			resultMessage.value = resultMessages.lose;
		}
	};

	const playAgain = (): void => {
		resultMessage.value = null;
		picks.splice(0, picks.length);
	};
</script>
