<script lang="ts">
  /** @type {string} */
  export let height = '60px';
</script>

<footer class="svel-footer" style={`height:${height}`}>
  <slot />
</footer>
