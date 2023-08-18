<script lang="ts">
	import a2s from '@svelement-ui/util-array-2-class-string';

	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	$: classString = a2s(['svel-container', ['is-vertical', direction === 'vertical']]);
</script>

<section class={classString}>
	<slot />
</section>
