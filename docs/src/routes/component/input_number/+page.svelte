<script>
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';
  import { SvelButton, SvelCol, SvelInputNumber, SvelRow } from '@svelement-ui/all';
  import { Calendar, Search, SvelIcon } from '@svelement-ui/icon';

  let langFn = getContext('langFn');

  let input1 = '';
  let inputF = '';
</script>

<h1>{$langFn('cinputNum01010')}</h1>
