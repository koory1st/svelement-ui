<script>
  import N from '$lib/index.js';

  let ref;
  let visible = false;
  let content = '1';
  let beforeShow = () => {
    console.log('1111');
  };
  let beforeHide = () => {
    console.log('2222');
  };
</script>

<div class="aaa">
  <div class="bbb" />
  <!--  <button-->
  <!--    bind:this={ref}-->
  <!--    on:click={() => (visible = !visible)}-->
  <!--    on:mouseover={(e) => (ref = e.currentTarget)}-->
  <!--  >-->
  <!--    11111-->
  <!--  </button>-->
  <!--  &lt;!&ndash; svelte-ignore a11y-mouse-events-have-key-events &ndash;&gt;-->
  <!--  <button-->
  <!--    bind:this={ref}-->
  <!--    on:click={() => (visible = !visible)}-->
  <!--    on:mouseover={(e) => (ref = e.currentTarget)}-->
  <!--  >-->
  <!--    22222-->
  <!--  </button>-->
  <!--  <N content="1111" virtualRef={ref} virtualTriggering {visible} />-->

  <N {content} on:beforeHide={beforeHide} on:beforeShow={beforeShow}>
    <button on:click={() => (content += '1')}>111</button>
  </N>
</div>

<style>
  .aaa {
    height: 5000px;
  }

  .bbb {
    height: 1300px;
  }
</style>
