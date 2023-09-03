<script lang="ts">
	import SellerCard from '$lib/components/SellerCard.svelte';
	import SellerMoreCard from '$lib/components/SellerMoreCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import PerYearGraph from '$lib/components/PerYearGraph.svelte';

	import SellerImage1 from '$lib/assets/imgs/1.jpg';
	import SellerImage2 from '$lib/assets/imgs/2.jpg';
	import SellerImage3 from '$lib/assets/imgs/3.jpg';

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
			name: 'ทุเรียนนายสมบูรณ์',
			address: 'อ.สตึก, บุรีรัมย์',
			phone: '0812345678',
			price: 152,
			image: SellerImage1,
			id: 1
		},
		{
			name: 'บ้านทุเรียน',
			address: 'อ.แคนดง, บุรีรัมย์',
			phone: '0812345678',
			price: 155,
			image: SellerImage2,
			id: 2
		}
	];
	const year = new Date().getFullYear();
</script>

<section class="first-section">
	<Heading tag="h1">กราฟพยากรณ์ราคาทุเรียนปี {year + 543}</Heading>
	<div class="z-0 my-10">
		<PerYearGraph />
	</div>
	<!-- <Heading tag="h2" customSize="text-2xl text-bold mt-4">รายละเอียดกราฟ</Heading>
	<P class="font-loop"
		>รันเวย์คอนโดยะเยือก อัลมอนด์ สเตชั่นสตริงแจ๊กพอตดีพาร์ตเมนท์ บิ๊ก คาร์โก้
		ซีนเซนเซอร์โยเกิร์ตฮองเฮาพาร์ตเนอร์ รีเสิร์ชปัจเจกชนไมเกรน ศิลปากรเทรดจึ๊กสเตเดียม ซูม
		พ่อค้าอีสเตอร์ ตรวจสอบนายพรานแชมปิยอง รีโมตคอลัมนิสต์ซูฮกเชอร์รี่
		ไอซียูท็อปบูตคลาสสิกหม่านโถวง่าว ซูฮกเกสต์เฮาส์บอร์ดสแล็ก แพ็คตนเองโอเปร่าเจได เพนกวิน</P
	> -->
</section>
<section>
	<Heading tag="h2" customSize="text-2xl text-bold mt-4">ร้านค้าทุเรียน</Heading>
	<div
		class="flex max-md:flex-wrap justify-center overflow-auto
		md:gap-x-2 md:flex md:snap-mandatory md:snap-x md:items-center"
	>
		{#each data as { name, address, phone, price, image, id }}
			<SellerCard {name} {address} {phone} {price} {image} {id} />
		{/each}
		<SellerMoreCard />
	</div>
</section>

<!-- <section class="my-4">
	<HowTo />
</section>
<section class="my-4">
	<About />
</section> -->

<style>
	.first-section {
		height: calc(100wh - 84px);
	}
</style>
