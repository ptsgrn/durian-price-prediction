<script lang="ts">
	import '@carbon/charts/styles.css';
	let year = new Date().getFullYear() + 543;
	import Heading from '$lib/components/Heading.svelte';
	import { onMount } from 'svelte';
	import P from '$lib/components/P.svelte';

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
</script>

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
	พ่อค้าอีสเตอร์ ตรวจสอบนายพรานแชมปิยอง รีโมตคอลัมนิสต์ซูฮกเชอร์รี่ ไอซียูท็อปบูตคลาสสิกหม่านโถวง่าว
	ซูฮกเกสต์เฮาส์บอร์ดสแล็ก แพ็คตนเองโอเปร่าเจได เพนกวิน</P
>
