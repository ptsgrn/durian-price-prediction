<script lang="ts">
	import P from '$lib/components/P.svelte';
	import SellerCard from '$lib/components/SellerCard.svelte';
	import SellerMoreCard from '$lib/components/SellerMoreCard.svelte';
	import { Bar } from 'svelte-chartjs';
	import Chart from 'chart.js/auto';
	import HowTo from './howto/+page.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { rawData } from '$lib/stores/mockup';
	import { chart } from 'svelte-apexcharts'
	interface SellerData {
		image: string;
		name: string;
		address: string;
		phone: string;
		price: number;
		id: number;
	}

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
		labels: rawData.map((d) => d[0]),
		datasets: [
			{
				label: 'ราคาพยากรณ์',
				type: 'line',
				backgroundColor: 'rgb(108, 43, 217)',
				hoverBorderColor: 'white',
				fill: false,
				tension: 0,
				data: rawData.map((d) => d[1]),
				yAxisID: 'y',
				xAxisID: 'x'
			}
		]
	};
	let chartOptions = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>หน้าหลัก</title>
	<mata name="title" content="หน้าหลัก - พยากรณ์ราคาทุเรียนหมอนทอง" />
	<meta
		name="description"
		content="ทุเรียน หรือที่ใครๆต่างรู้จักกันในชื่อ ราชาแห่งผลไม้ เป็นผลไม้ตาม ฤดูกาลที่ถือว่ามีความสำคัญต่อภาคเกษตรไทย และยังเป็นผลไม้ ส่งออกอันดับ 1 ในกลุ่มผลไม้ไทยที่ส่งออกไปยังตลาดทั่วโลก"
	/>
	<!-- Primary Meta Tags -->
	<title>หน้าหลัก - พยากรณ์ราคาทุเรียนหมอนทอง</title>
	<meta name="title" content="หน้าหลัก - พยากรณ์ราคาทุเรียนหมอนทอง" />
	<meta
		name="description"
		content="ทุเรียน หรือที่ใครๆต่างรู้จักกันในชื่อ ราชาแห่งผลไม้ เป็นผลไม้ตาม ฤดูกาลที่ถือว่ามีความสำคัญต่อภาคเกษตรไทย และยังเป็นผลไม้ ส่งออกอันดับ 1 ในกลุ่มผลไม้ไทยที่ส่งออกไปยังตลาดทั่วโลก"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://durian-price-prediction.app.ptsgrn.dev/" />
	<meta property="og:title" content="หน้าหลัก - พยากรณ์ราคาทุเรียนหมอนทอง" />
	<meta
		property="og:description"
		content="ทุเรียน หรือที่ใครๆต่างรู้จักกันในชื่อ ราชาแห่งผลไม้ เป็นผลไม้ตาม ฤดูกาลที่ถือว่ามีความสำคัญต่อภาคเกษตรไทย และยังเป็นผลไม้ ส่งออกอันดับ 1 ในกลุ่มผลไม้ไทยที่ส่งออกไปยังตลาดทั่วโลก"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="http://durian-price-prediction.app.ptsgrn.dev/" />
	<meta property="twitter:title" content="หน้าหลัก - พยากรณ์ราคาทุเรียนหมอนทอง" />
	<meta
		property="twitter:description"
		content="ทุเรียน หรือที่ใครๆต่างรู้จักกันในชื่อ ราชาแห่งผลไม้ เป็นผลไม้ตาม ฤดูกาลที่ถือว่ามีความสำคัญต่อภาคเกษตรไทย และยังเป็นผลไม้ ส่งออกอันดับ 1 ในกลุ่มผลไม้ไทยที่ส่งออกไปยังตลาดทั่วโลก"
	/>
</svelte:head>

<section class="first-section">
	<Heading tag="h1">กราฟพยากรณ์ราคาทุเรียนปี {year}</Heading>
	<div class="z-0 my-10">
		<div use:chart={chartOptions} />
	</div>
	<Heading tag="h2" customSize="text-2xl text-bold mt-4">รายละเอียดกราฟ</Heading>
	<P class="font-loop"
		>รันเวย์คอนโดยะเยือก อัลมอนด์ สเตชั่นสตริงแจ๊กพอตดีพาร์ตเมนท์ บิ๊ก คาร์โก้
		ซีนเซนเซอร์โยเกิร์ตฮองเฮาพาร์ตเนอร์ รีเสิร์ชปัจเจกชนไมเกรน ศิลปากรเทรดจึ๊กสเตเดียม ซูม
		พ่อค้าอีสเตอร์ ตรวจสอบนายพรานแชมปิยอง รีโมตคอลัมนิสต์ซูฮกเชอร์รี่
		ไอซียูท็อปบูตคลาสสิกหม่านโถวง่าว ซูฮกเกสต์เฮาส์บอร์ดสแล็ก แพ็คตนเองโอเปร่าเจได เพนกวิน</P
	>
</section>
<!-- <section>
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
</section> -->
<section class="my-4">
	<HowTo />
</section>

<style>
	.first-section {
		height: calc(100wh - 84px);
	}
</style>
