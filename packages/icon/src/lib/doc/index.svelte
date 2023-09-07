<script lang="ts">
  import Icon from '../icon.svelte';
  import Loading from '../loading.svelte';
</script>

<!-- <Loading /> -->

<h1>安装</h1>
<h2>使用包管理器</h2>
<pre>$ pnpm install @svelement-ui/icon</pre>

<h2>基础用法</h2>

<Icon size={80} color="red" class="is-loading">
  <Loading />
</Icon>
