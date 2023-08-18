<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import './layout.scss';
	import { SvelAside } from '@svelement-ui/all';
	import SvelContainer from '@svelement-ui/container';
	import SvelHeader from '@svelement-ui/header';
	import SvelMain from '@svelement-ui/main';
	import SvelFooter from '@svelement-ui/footer';
	import SvelRow from '@svelement-ui/row';
	import SvelCol from '@svelement-ui/col';
</script>

<SvelContainer direction="vertical">
	<SvelHeader class="header">
		<SvelRow class="header-row">
			<SvelCol span="6">SvelementUI</SvelCol>
			<SvelCol span="18">
				<nav>
					<a href="{PUBLIC_BASE_PATH}component">Component</a>
				</nav>
			</SvelCol>
		</SvelRow>
	</SvelHeader>

	<SvelMain>
		<slot />
	</SvelMain>
	<SvelFooter>SvelementUI footer</SvelFooter>
</SvelContainer>

<style>
</style>
