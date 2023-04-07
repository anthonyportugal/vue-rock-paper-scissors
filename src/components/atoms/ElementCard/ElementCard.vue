<template>
	<div
		:class="[
			'a-elementCard flex w-40 flex-col items-center rounded-2xl bg-rosewater p-4 text-2xl shadow-lg shadow-overlay0',
			clickableClasses
		]"
		@click="onCardClick">
		<div class="p-4">
			<img
				class="z-20 h-20 w-20 fill-sapphire"
				:src="props.element.icon"
				:alt="`${props.element.name}-icon`" />
		</div>
		<div
			class="flex h-10 w-full items-center justify-center rounded-2xl bg-white">
			<span class="z-10">{{ props.element.name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { ElementItem } from '@/types';

	interface Props {
		element: ElementItem;
		clickable?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		clickable: false
	});
	const emits = defineEmits<{
		(e: 'click', element: ElementItem): void;
	}>();

	const clickableClasses = props.clickable
		? 'cursor-pointer transition-transform hover:scale-110'
		: '';

	const onCardClick = () => {
		props.clickable && emits('click', props.element);
	};
</script>
