<script lang="ts">
	import { getContext } from 'svelte';
	import a2s from '@svelement-ui/util-array-2-class-string';
	import a2st from '@svelement-ui/util-array-2-style-string';

	export let span = 24;
	export let offset = 0;
	export let pull = 0;
	export let push = 0;
	export let xs = 0;
	export let sm = 0;
	export let md = 0;
	export let lg = 0;
	export let xl = 0;

	let gutter: number = getContext('svelRowGutter');

	$: classString = a2s([
		'svel-col',
		[`svel-col-${span}`, Boolean(span)],
		[`svel-col-offset-${offset}`, Boolean(offset)],
		[`svel-col-pull-${pull}`, Boolean(pull)],
		[`svel-col-push-${push}`, Boolean(push)],
		[`svel-col-xs-${xs}`, Boolean(xs)],
		[`svel-col-sm-${sm}`, Boolean(sm)],
		[`svel-col-md-${md}`, Boolean(md)],
		[`svel-col-lg-${lg}`, Boolean(lg)],
		[`svel-col-xl-${xl}`, Boolean(xl)],
		$$props.class,
	]);

	$: style = a2st([
		['padding-left', gutter / 2, Boolean(gutter)],
		['padding-right', gutter / 2, Boolean(gutter)],
	]);
</script>

<div class={classString} {style}>
	<slot />
</div>
