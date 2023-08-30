<script lang="ts">
  export let data;
  console.log('🚀 ~ file: +page.svelte:3 ~ data:', data);
</script>

<!-- /* eslint-disable */ -->
<p>{@html data.content}</p>
