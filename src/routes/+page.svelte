<script lang="ts">
	import '@carbon/charts/styles.css';
	let year = new Date().getFullYear() + 543;
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import P from '$lib/components/P.svelte';
	import MediumItem from '$lib/components/MediumItem.svelte';

	let chart: any;
	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		chart = charts.LineChart;
	});

	let durianData = [
		{
			group: 'Dataset 1',
			date: new Date('2018-12-31T17:00:00.000Z'),
			value: 5,
			surplus: 13
		}
	];
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
		},
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
</script>

<section class="first-section">
	<Heading tag="h1">กราฟพยากรณ์ราคาทุเรียนปี {year}</Heading>
	<div class="z-0 my-10">
		<svelte:component
			this={chart}
			data={durianData}
			options={{
				// title: 'Line (time series)',
				axes: {
					bottom: {
						title: 'วันที่',
						mapsTo: 'date',
						scaleType: 'time'
					},
					left: {
						mapsTo: 'value',
						title: 'ราคา (บาท/กก.)',
						scaleType: 'linear'
					}
				},
				curve: 'curveMonotoneX',
				height: '400px'
			}}
		/>
	</div>
	<Heading tag="h2" customSize="text-xl text-bold">รายละเอียดกราฟ</Heading>
	<P class="font-loop"
		>รันเวย์คอนโดยะเยือก อัลมอนด์ สเตชั่นสตริงแจ๊กพอตดีพาร์ตเมนท์ บิ๊ก คาร์โก้
		ซีนเซนเซอร์โยเกิร์ตฮองเฮาพาร์ตเนอร์ รีเสิร์ชปัจเจกชนไมเกรน ศิลปากรเทรดจึ๊กสเตเดียม ซูม
		พ่อค้าอีสเตอร์ ตรวจสอบนายพรานแชมปิยอง รีโมตคอลัมนิสต์ซูฮกเชอร์รี่
		ไอซียูท็อปบูตคลาสสิกหม่านโถวง่าว ซูฮกเกสต์เฮาส์บอร์ดสแล็ก แพ็คตนเองโอเปร่าเจได เพนกวิน</P
	>

	<div class="relative bottom-[5%] left-[50%] translate-x-[-50%] block text-center">
		<span class="material-symbols-outlined"> arrow_downward </span>
		<p>เลื่อนลงเพื่อดูข้อมูลเพิ่มเติม</p>
	</div>
</section>
<section>
	<Heading tag="h2" customSize="text-xl text-bold">ร้านค้าปัจุบัน</Heading>
	<div class="flex flex-warp">
		{#each data as item}
			<MediumItem title={item.title} description={item.description} />
		{/each}
	</div>
</section>

<style>
	.first-section {
		height: calc(100wh - 84px);
	}
</style>
