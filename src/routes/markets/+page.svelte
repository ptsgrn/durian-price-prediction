<script>
	import Heading from '$lib/components/Heading.svelte';
	import SellerInMarket from '$lib/components/SellerInMarket.svelte';

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

<svelte:head>
	<title>ตลาดทุเรียน</title>
</svelte:head>

<Heading tag="h1" class="pt-4">ร้านค้าทุเรียน</Heading>
<div class="flex flex-col dark:text-white">
	<SellerInMarket />
	<SellerInMarket />
	<SellerInMarket />
	<SellerInMarket />
	<SellerInMarket />
</div>
