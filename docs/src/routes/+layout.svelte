<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import './layout.scss';
	import { SvelCol, SvelContainer, SvelFooter } from '@svelement-ui/all';
	import SvelHeader from '@svelement-ui/header';
	import SvelMain from '@svelement-ui/main';
	import SvelRow from '@svelement-ui/row';
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
