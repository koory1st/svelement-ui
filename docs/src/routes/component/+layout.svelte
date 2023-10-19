<script>
  import { PUBLIC_BASE_PATH } from '$env/static/public';
  import { SvelAside, SvelContainer, SvelMain, SvelLink, SvelScrollbar } from '@svelement-ui/all';
  import { getContext } from 'svelte';
  let langFn = getContext('langFn');

  export let data;
</script>

<SvelContainer>
  <SvelAside>
    <SvelScrollbar maxHeight={1000}>
      {#each data.component_group_list as group}
        <div>{$langFn(group.name)}</div>
        <div>
          <ul>
            {#each group.component_list as component}
              <li>
                <SvelLink href="{PUBLIC_BASE_PATH}component/{component.key}">
                  {$langFn(component.name)}
                </SvelLink>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </SvelScrollbar>
  </SvelAside>

  <SvelScrollbar>
    <SvelMain>
      <div class="doc-content-wrapper">
        <div class="doc-content-container">
          <div class="doc-content">
            <SvelScrollbar>
              <slot />
            </SvelScrollbar>
          </div>
        </div>
      </div>
    </SvelMain>
  </SvelScrollbar>
</SvelContainer>
