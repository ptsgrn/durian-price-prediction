<script lang="ts">
	import '@carbon/charts/styles.css';
	let year = new Date().getFullYear() + 543;
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import P from '$lib/components/P.svelte';
	import MediumItem from '$lib/components/MediumItem.svelte';
	import SellerCard from '$lib/components/SellerCard.svelte';
	import SellerMoreCard from '$lib/components/SellerMoreCard.svelte';

	interface SellerData {
		image: string;
		name: string;
		address: string;
		phone: string;
		price: number;
		id: number;
	}

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
	const data: SellerData[] = [
		{
			name: 'ทดสอบ นางสอบทด',
			address: 'อ.สตึก, บุรีรัมย์',
			phone: '0812345678',
			price: 152,
			image: 'https://via.placeholder.com/1600x900?text=Image+1',
			id: 1
		},
		{
			name: 'ทดสอบ นางสอบทด 2',
			address: 'อ.แคนดง, บุรีรัมย์',
			phone: '0812345678',
			price: 155,
			image: 'https://via.placeholder.com/1600x900?text=Image+2',
			id: 2
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
	<Heading tag="h2" customSize="text-2xl text-bold mt-4">รายละเอียดกราฟ</Heading>
	<P class="font-loop"
		>รันเวย์คอนโดยะเยือก อัลมอนด์ สเตชั่นสตริงแจ๊กพอตดีพาร์ตเมนท์ บิ๊ก คาร์โก้
		ซีนเซนเซอร์โยเกิร์ตฮองเฮาพาร์ตเนอร์ รีเสิร์ชปัจเจกชนไมเกรน ศิลปากรเทรดจึ๊กสเตเดียม ซูม
		พ่อค้าอีสเตอร์ ตรวจสอบนายพรานแชมปิยอง รีโมตคอลัมนิสต์ซูฮกเชอร์รี่
		ไอซียูท็อปบูตคลาสสิกหม่านโถวง่าว ซูฮกเกสต์เฮาส์บอร์ดสแล็ก แพ็คตนเองโอเปร่าเจได เพนกวิน</P
	>
</section>
<section>
	<Heading tag="h2" customSize="text-2xl text-bold mt-4">ร้านค้าทุเรียน</Heading>
	<div
		class="flex flex-wrap justify-center overflow-auto
		md:gap-x-2 md:w-auto md:block md:whitespace-nowrap md:snap-mandatory md:snap-x"
	>
	{#each data as {name, address, phone, price, image, id}}
		<SellerCard 
			{name}
			{address}
			{phone}
			{price}
			{image}
			{id}
		/>
	{/each}
		<SellerMoreCard />
	</div>
</section>

<style>
	.first-section {
		height: calc(100wh - 84px);
	}
</style>
