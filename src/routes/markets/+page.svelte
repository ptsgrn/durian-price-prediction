<script>
	import Heading from '$lib/components/Heading.svelte';
	import LargeList from '$lib/components/LargeList.svelte';
	import MediumItem from '$lib/components/MediumItem.svelte';
	import { Dropdown, DropdownItem, DropdownDivider, Radio, Button } from 'flowbite-svelte';

	// สร้าง Dataset ของทุเรียนที่มีตัวแปร Title, Description, Image, Link, Price
	const data = [
		{
			title: 'ทุเรียน 1',
			description: 'ทุเรียน 1',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 159
		},
		{
			title: 'ทุเรียน 2',
			description: 'ทุเรียน 2',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 3',
			description: 'ทุเรียน 3',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 4',
			description: 'ทุเรียน 4',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 5',
			description: 'ทุเรียน 5',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 6',
			description: 'ทุเรียน 6',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 7',
			description: 'ทุเรียน 7',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 8',
			description: 'ทุเรียน 8',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 9',
			description: 'ทุเรียน 9',
			image: 'https://via.placeholder.com/150',
			link: '#',
			price: 123
		}
	];
	let group2 = 2;
</script>

<div class="flex items-center">
	<Heading tag="h1">ร้านค้า</Heading>
	<div>
		<button><span class="material-symbols-outlined relative">list</span></button>
		<Dropdown class="w-48 p-3 space-y-1">
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group2" bind:group={group2} value={1}>Large List</Radio>
			</li>
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group2" bind:group={group2} value={2}>Medium List</Radio>
			</li>
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group2" bind:group={group2} value={3}>Small List</Radio>
			</li>
		</Dropdown>
	</div>
</div>
<div class="flex flex-wrap">
	{#each data as item}
		<MediumItem
			title={item.title}
			description={item.description}
			image={item.image}
			link={item.link}
			price={item.price}
		/>
	{/each}
	{#each data as item}
		<LargeList
			title={item.title}
			description={item.description}
			image={item.image}
			link={item.link}
			price={item.price}
		/>
	{/each}
</div>
