<script lang="ts">
	let year = new Date().getFullYear() + 543;
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import P from '$lib/components/P.svelte';
	import MediumItem from '$lib/components/MediumItem.svelte';
	import SellerCard from '$lib/components/SellerCard.svelte';
	import SellerMoreCard from '$lib/components/SellerMoreCard.svelte';
	import { Bar } from 'svelte-chartjs';
	import Chart from 'chart.js/auto';

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
			image:
				'https://images.unsplash.com/photo-1637819743321-d06e11ac213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
			id: 1
		},
		{
			name: 'ทดสอบ นางสอบทด 2',
			address: 'อ.แคนดง, บุรีรัมย์',
			phone: '0812345678',
			price: 155,
			image:
				'https://images.unsplash.com/photo-1637819743321-d06e11ac213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
			id: 2
		}
	];

	let chartData = {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		datasets: [
			{
				label: 'ราคาพยากรณ์',
				type: 'line',
				backgroundColor: 'rgb(75, 192, 192, 0.5)',
				borderColor: 'rgb(75, 192, 192)',
				hoverBorderColor: 'rgb(175, 192, 192)',
				fill: false,
				tension: 0,
				data: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
				yAxisID: 'y',
				xAxisID: 'x'
			},
			{
				label: 'ราคาอย่างสูง',
				type: 'line',
				backgroundColor: 'rgb(75, 192, 255, 0.5)',
				borderColor: '#999',
				pointRadius: 0,
				fill: 0,
				tension: 0,
				data: [11.1, 10.1, 9.2, 8.5, 7.2, 6.9, 5.3, 4.3, 3.4, 2.4],
				yAxisID: 'y',
				xAxisID: 'x'
			},
			{
				label: 'ราคาอย่างต่ำ',
				type: 'line',
				backgroundColor: 'rgb(75, 192, 255, 0.5)',
				borderColor: '#999',
				pointRadius: 0,
				fill: 0,
				tension: 0,
				data: [10.8, 9.7, 8.6, 7.1, 6.2, 5.3, 4.3, 3.5, 2.1, 1.4],
				yAxisID: 'y',
				xAxisID: 'x'
			}
		]
	};
	let chartOptions = {
		scales: {
			xAxes: [
				{
					id: 'x',
					type: 'category'
				}
			],
			yAxes: [
				{
					id: 'y',
					type: 'linear',
					position: 'left',
					ticks: {
						stepSize: 1
					}
				}
			]
		}
	};
</script>

<section class="first-section">
	<Heading tag="h1">กราฟพยากรณ์ราคาทุเรียนปี {year}</Heading>
	<div class="z-0 my-10">
		<Bar data={chartData} options={chartOptions} />
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
		{#each data as { name, address, phone, price, image, id }}
			<SellerCard {name} {address} {phone} {price} {image} {id} />
		{/each}
		<SellerMoreCard />
	</div>
</section>

<style>
	.first-section {
		height: calc(100wh - 84px);
	}
</style>
