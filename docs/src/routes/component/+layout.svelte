<script lang="ts">
  import { PUBLIC_BASE_PATH } from '$env/static/public';
  import { SvelAside, SvelContainer, SvelMain, SvelLink } from '@svelement-ui/all';
  export let data;
</script>

<SvelContainer>
  <SvelAside>
    {#each data.component_group_list as group}
      <div>{group.name} {group.name_cn}</div>
      <div>
        <ul>
          {#each group.component_list as component}
            <li>
              <SvelLink href="{PUBLIC_BASE_PATH}component/{component.key}">
                {component.name + ' ' + component.name_cn}
              </SvelLink>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </SvelAside>

  <SvelMain>
    <div class="doc-content-wrapper">
      <div class="doc-content-container">
        <div class="doc-content">
          <slot />
        </div>
      </div>
    </div>
  </SvelMain>
</SvelContainer>
