<script>
	import Heading from '$lib/components/Heading.svelte';
	import SellerInMarket from '$lib/components/SellerInMarket.svelte';
	import SellerImage1 from '$lib/assets/imgs/1.jpg?webp';
	import SellerImage2 from '$lib/assets/imgs/2.jpg?webp';
	import SellerImage3 from '$lib/assets/imgs/3.jpg?webp';
	// สร้าง Dataset ของทุเรียนที่มีตัวแปร Title, Description, Image, Link, Price
	const data = [
		{
			title: 'ทุเรียน 1',
			description: 'ทุเรียน 1',
			image: SellerImage1,
			link: '#',
			price: 159
		},
		{
			title: 'ทุเรียน 2',
			description: 'ทุเรียน 2',
			image: SellerImage2,
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 3',
			description: 'ทุเรียน 3',
			image: SellerImage3,
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 4',
			description: 'ทุเรียน 4',
			image: SellerImage1,
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 5',
			description: 'ทุเรียน 5',
			image: SellerImage2,
			link: '#',
			price: 123
		},
		{
			title: 'ทุเรียน 6',
			description: 'ทุเรียน 6',
			image: SellerImage3,
			link: '#',
			price: 123
		}
	];
	let group2 = 2;
</script>

<svelte:head>
	<title>ตลาดทุเรียน - พยากรณ์ราคาทุเรียนหมอนทอง</title>
</svelte:head>

<Heading tag="h1" class="pt-4">ร้านค้าทุเรียน</Heading>
<div class="flex flex-col dark:text-white">
	{#each data as { image }}
		<SellerInMarket {image} />
	{/each}
</div>
