<script lang="ts">
  export let data;
  console.log('🚀 ~ file: +page.svelte:3 ~ data:', data);
  const { page } = data;
</script>

<svelte:component this={page} />
