<script>
	import '../app.scss';
	import '../app.postcss';
	import { Footer } from 'flowbite-svelte';
	import { version } from '$app/environment';
	import FooterCopyright from '$lib/components/FooterCopyright.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<div class="">
	<Navigation />
	<main id="main" class="px-5 dark:bg-slate-800 md:w-[47rem] m-auto duration-200">
		<slot />
	</main>
	<Footer class="mx-auto align-middle justify-center items-center flex-col">
		<FooterCopyright
			class="mx-auto w-full"
			href="https://ptsgrn.github.io"
			by="Patsagorn Y."
			copyrightMessage="Where applicable, this site was commissioned and is protected by the owner's copyright as a component of that project."
		/>
		<div class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Version: {Number(version).toString(16)}</div>
	</Footer>
</div>
