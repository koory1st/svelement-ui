<script lang="ts">
	import './app.css';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
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
	<SvelHeader class="flex border-b border-solid border-gray-200">
		<SvelRow class="lg:w-6/12 mx-auto items-center">
			<SvelCol span={6} class="title">
				<SvelLink href={PUBLIC_BASE_PATH} type="primary" underline={false}>
					<span class="text-2xl font-bold">SvelementUI</span>
				</SvelLink>
			</SvelCol>
			<SvelCol span={18} class="flex justify-end">
				<SvelLink href="{PUBLIC_BASE_PATH}component" type="primary">Component</SvelLink>
				<SvelLink href="https://github.com/koory1st/svelement-ui" type="primary" target="_blank">
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
		<div class="lg:w-6/12 mx-auto">
			<slot />
		</div>
	</SvelMain>
	<SvelFooter>
		<div class="border-t border-solid border-gray-200">
			<div class="lg:w-6/12 mx-auto">SvelementUI footer</div>
		</div>
	</SvelFooter>
</SvelContainer>

<style>
</style>
