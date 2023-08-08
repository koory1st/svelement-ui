import { redirect } from '@sveltejs/kit';
	import {
		PUBLIC_BASE_PATH
	} from '$env/static/public';

export function load() {
	throw redirect(307, `${PUBLIC_BASE_PATH}component`);
}
