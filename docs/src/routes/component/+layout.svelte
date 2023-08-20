<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import '@svelement-ui/container/dist/style.css';
	import '@svelement-ui/main/dist/style.css';
	import { SvelAside, SvelContainer, SvelMain, SvelLink } from '@svelement-ui/all';
</script>

<SvelContainer>
	<SvelAside>
		<div>Basic 基础组件</div>
		<div>
			<ul>
				<li><SvelLink href="{PUBLIC_BASE_PATH}component/button">Button 按钮</SvelLink></li>
				<li>
					<SvelLink href="{PUBLIC_BASE_PATH}component/container">Container 布局容器</SvelLink>
				</li>
			</ul>
		</div>
	</SvelAside>

	<SvelMain>
		<slot />
	</SvelMain>
</SvelContainer>
