<script lang="ts">
	import './app.css';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import './layout.scss';
	import {
		SvelCol,
		SvelContainer,
		SvelFooter,
		SvelHeader,
		SvelMain,
		SvelRow,
		SvelLink,
	} from '@svelement-ui/all';
</script>

<SvelContainer direction="vertical" class="docs-container">
	<SvelHeader class="header">
		<SvelRow class="header-row">
			<SvelCol span={6} class="title">
				<SvelLink href={PUBLIC_BASE_PATH} type="primary" underline={false}>SvelementUI</SvelLink>
			</SvelCol>
			<SvelCol span={18} class="content">
				<SvelLink href="{PUBLIC_BASE_PATH}component" type="primary">Component</SvelLink>
				<SvelLink href="https://github.com/koory1st/svelement-ui" type="primary">
					<img
						src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
						width="24"
						height="24"
						alt=""
					/>
				</SvelLink>
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
