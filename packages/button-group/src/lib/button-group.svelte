<script lang="ts">
  import { setContext } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  export let size: 'large' | 'default' | 'small' | undefined = undefined;
  export let type: 'primary' | 'success' | 'warning' | 'danger' | 'info' | undefined = undefined;

  $: classString = a2s(['svel-button-group', $$props.class]);

  setContext('svel-size', size);
  setContext('svel-button-type', type);
</script>

<div class={classString}>
  <slot />
</div>
