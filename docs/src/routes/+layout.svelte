<SvelContainer>
  <SvelHeader>
    SvelementUI header
    <nav>
      <a href="{PUBLIC_BASE_PATH}component">Component</a>
    </nav>
  </SvelHeader>

  <SvelMain>
    <slot/>
  </SvelMain>
  <SvelFooter>
    SvelementUI footer
  </SvelFooter>
</SvelContainer>

<script lang="ts">
import { PUBLIC_BASE_PATH } from '$env/static/public';
import SvelContainer from '@svelement-ui/container';
import SvelHeader from '@svelement-ui/header';
import SvelMain from '@svelement-ui/main';
import SvelFooter from '@svelement-ui/footer';
</script>