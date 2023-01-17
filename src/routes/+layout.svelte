<script>
	import '../app.postcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Drawer,
		CloseButton,
		ToolbarButton,
		Footer
	} from 'flowbite-svelte';
	import FooterCopyright from '$lib/components/FooterCopyright.svelte';
	import MenuHamburger from '$lib/components/MenuHamburger.svelte';
	import { sineIn } from 'svelte/easing';
	import DurianIcon from '$lib/assets/icons/noun-durian-1510201.svg';
	import { page } from '$app/stores';

	let hidden = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<div class="">
	<Navbar let:toggle class="border-b-4 !border-purple-700 text-black !py-3">
		<a
			href="#main"
			class="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-2"
		>
			ข้ามส่วนนำทาง
		</a>
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				พยากรณ์ราคาทุเรียนหมอนทอง
			</span>
		</NavBrand>
		<div class="flex">
			<ToolbarButton
				name="เปิดเมนูหลัก"
				on:click={() => {
					hidden = !hidden;
				}}
				class="ml-3 lg:hidden"
			>
				<MenuHamburger />
			</ToolbarButton>
		</div>
		<NavUl divClass="hidden lg:flex font-loop">
			<NavLi class="block pt-7 group transition duration-300 px-5" href="/"
				>หน้าหลัก<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
				/></NavLi
			>
			<NavLi class="block pt-7 group transition duration-300 px-5" href="/predictions"
				>พยากรณ์ราคาทุเรียน<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
				/></NavLi
			>
			<NavLi class="block pt-7 group transition duration-300 px-5" href="/howto"
				>วิธีใช้งาน<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
				/></NavLi
			>
			<NavLi class="block pt-7 group transition duration-300 px-5" href="/markets"
				>ร้านค้า<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
				/></NavLi
			>
			<NavLi class="block pt-7 group transition duration-300 px-5" href="/about"
				>เกี่ยวกับเว็บไซต์<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
				/></NavLi
			>
		</NavUl>
		<Drawer
			placement="right"
			transitionType="fly"
			{transitionParams}
			id="mobile-menu-3"
			bind:hidden
			divClass="p-0 border-l-4 border-purple-700 bg-white dark:bg-gray-800 dark:text-white z-10 font-loop"
			backdrop={false}
		>
			<div class="flex items-center m-4">
				<CloseButton on:click={() => (hidden = true)} class=" dark:text-white rounded-none" />
			</div>
			<div class="flex flex-col gap-2 font-loop">
				<a class="block pt-7 text-2xl group transition duration-300 px-5" href="/"
					>หน้าหลัก<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
					/></a
				>
				<a class="block pt-7 text-2xl group transition duration-300 px-5" href="/predictions"
					>พยากรณ์ราคาทุเรียน<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
					/></a
				>
				<a class="block pt-7 text-2xl group transition duration-300 px-5" href="/howto"
					>วิธีใช้งาน<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
					/></a
				>
				<a class="block pt-7 text-2xl group transition duration-300 px-5" href="/markets"
					>ร้านค้า<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
					/></a
				>
				<a class="block pt-7 text-2xl group transition duration-300 px-5" href="/about"
					>เกี่ยวกับเว็บไซต์<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-purple-700"
					/></a
				>
				<div class="text-sm flex flex-row border-t-4 justify-around absolute bottom-0 w-full p-4">
					<a href="tel:0934197461" class="flex flex-row items-center gap-3 dark:fill-white">
						<svg width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
								d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
							/></svg
						>0934197461
					</a>
					<div class="flex flex-row items-center gap-3 dark:fill-white">
						<svg width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><path
								d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
							/></svg
						><a href="/about">ติดต่อเรา</a>
					</div>
				</div>
			</div>
		</Drawer>
	</Navbar>
	<main id="main" class="px-5 dark:bg-slate-800 md:w-[47rem] m-auto  duration-200">
		<slot />
	</main>
	<Footer class="mx-auto align-middle justify-center items-center">
		<FooterCopyright
			class="mx-auto w-full"
			href="https://ptsgrn.github.io"
			by="Patsagorn Y."
			copyrightMessage="Where applicable, this site was commissioned and is protected by the owner's copyright as a component of that project."
		/>
	</Footer>
</div>
