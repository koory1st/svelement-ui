<script>
  import { setContext } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  /** @type {'large' | 'default' | 'small'} */
  export let size = null;
  /** @type {'primary' | 'success' | 'warning' | 'danger' | 'info'} */
  export let type = undefined;

  $: classString = a2s(['svel-button-group', $$props.class]);

  setContext('svel-size', size);
  setContext('svel-button-type', type);
</script>

<div class={classString}>
  <slot />
</div>
