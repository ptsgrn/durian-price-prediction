<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
	import classNames from 'classnames';
	export let spanClass: string = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
	export let aClass: string = 'hover:underline';
	export let year: number = new Date().getFullYear();
	export let href: string = '';
	export let by: string = '';
	export let target: string | undefined = undefined;
	export let copyrightMessage: string = 'All Rights Reserved.';
</script>

<span class={classNames(spanClass, $$props.class)}>
	&copy; {year}
	{#if href}
		<a {...$$restProps} {href} {target} class={aClass}>
			{by}
		</a>
	{:else}
		<span class="ml-1">{by}</span>
	{/if}<br />{copyrightMessage}
</span>
