<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
	import Heading from '$lib/components/Heading.svelte';
	import P from '$lib/components/P.svelte';
	import { Skeleton } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>เกี่ยวกับ</title>
</svelte:head>
<Heading tag="h2" class="mt-2">เกี่ยวกับเว็บไซต์</Heading>
<Heading tag="h3" class="my-3 mt-5">ที่มาและความสำคัญ</Heading>
<P>
	<Skeleton />
</P>
<Heading tag="h3" class="my-3 mt-5">วัตถุประสงค์</Heading>
<P>
	<Skeleton />
</P>
<Heading tag="h3" class="my-3 mt-5">สรุปผลการทดลอง</Heading>
<P>
	<Skeleton />
</P>

<Heading tag="h3" class="my-3 mt-5">ช่องทางติดต่อผู้ทำโครงงาน</Heading>
<div class="grid grid-cols-2">
	<P>
		<Skeleton />
	</P>
	<div class="flex flex-row gap-2 items-center justify-evenly">
		<span class="inline-block p-4 bg-slate-300"> เรา </span><span
			class="inline-block p-4 bg-slate-300"
		>
			เรา
		</span><span class="inline-block p-4 bg-slate-300"> ครู </span><span
			class="inline-block p-4 bg-slate-300"
		>
			ครู
		</span>
	</div>
</div>
