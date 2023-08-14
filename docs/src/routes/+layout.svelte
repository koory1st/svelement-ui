<SvelContainer direction="vertical">
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
import "@svelement-ui/container/dist/style.css"
import "@svelement-ui/header/dist/style.css"
import "@svelement-ui/footer/dist/style.css"
import "@svelement-ui/main/dist/style.css"
import SvelContainer from '@svelement-ui/container';
import SvelHeader from '@svelement-ui/header';
import SvelMain from '@svelement-ui/main';
import SvelFooter from '@svelement-ui/footer';
</script>