<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import '@svelement-ui/container/dist/style.css';
	import '@svelement-ui/aside/dist/style.css';
	import '@svelement-ui/main/dist/style.css';
	import SvelContainer from '@svelement-ui/container';
	import SvelAside from '@svelement-ui/aside';
	import SvelMain from '@svelement-ui/main';
</script>

<SvelContainer>
	<SvelAside>
		<div>Basic 基础组件</div>
		<div>
			<ul>
				<li><a href="{PUBLIC_BASE_PATH}component/button">Button 按钮</a></li>
				<li><a href="{PUBLIC_BASE_PATH}component/container">Container 布局容器</a></li>
			</ul>
		</div>
	</SvelAside>

	<SvelMain>
		<slot />
	</SvelMain>
</SvelContainer>
