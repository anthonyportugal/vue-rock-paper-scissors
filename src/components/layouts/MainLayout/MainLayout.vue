<template>
	<main
		:class="[
			'l-mainLayout flex h-screen w-screen items-center justify-center transition-colors',
			catppuccinColorScheme
		]">
		<slot />
	</main>
</template>
<script setup lang="ts">
	import { computed, ref } from 'vue';

	const darkSchemeMatchMedia = window.matchMedia(
		'(prefers-color-scheme: dark)'
	);

	const hasDarkPreference = ref<boolean>(darkSchemeMatchMedia.matches);
	const catppuccinColorScheme = computed<string>(() => {
		return hasDarkPreference.value ? 'mocha' : 'latte';
	});

	darkSchemeMatchMedia.addEventListener('change', () => {
		hasDarkPreference.value = darkSchemeMatchMedia.matches;
	});
</script>

<style scoped>
	.l-mainLayout {
		color: theme('colors.text');
		background: theme('colors.base');
	}
</style>
