<script lang="ts">
  export let height = '60px'
</script>

<header class="svel-header {$$props.class}" style={`height:${height}`}>
  <slot />
</header>
