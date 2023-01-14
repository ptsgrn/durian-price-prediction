<script>
	import Heading from '$lib/components/Heading.svelte';
	import { ImagePlaceholder, Img, Skeleton } from 'flowbite-svelte';
	import Step11 from '$lib/assets/imgs/1step1.jpg';
	import Step12 from '$lib/assets/imgs/1step2.jpg';
	import Step13 from '$lib/assets/imgs/1step3.jpg';
</script>

<svelte:head>
	<title>วิธีใช้งาน</title>
</svelte:head>

<Heading tag="h2" class="mt-2">วิธีใช้งาน</Heading>
<Heading tag="h3" class="my-3 mt-5">1. ต้องการทราบราคาทุเรียนจากการพยากรณ์</Heading>
<div class="grid grid-col-1 md:grid-cols-2">
	<Img
		src={Step11}
		class="shadow-md my-5 md:mx-3"
		alt="ภาพหน้าหลัก มีการไฮไลต์บริเวณที่เพื่อไปยังหน้าการพยากรณ์ราคา"
		caption="คลิกที่พยากรณ์ราคาทุเรียน"
	/>
	<Img
		src={Step12}
		class="shadow-md my-5 md:mx-3"
		alt="ภาพหน้าพยากรณ์ราคา มีปุ่มที่มีชื่อเดือนเพื่อเปลี่ยนราคาที่แสดงเป็นเดือนที่ต้องการได้"
		caption="กรอกข้อมูลเดือนและปีที่ต้องการทราบ"
	/>
	<Img
		src={Step13}
		class="shadow-md my-5 md:mx-3"
		alt="เมื่อเลือกเดือนเรียบร้อยแล้ว ราคาที่พยากรณ์ในเดือนนั้น ๆ จะแสดงขึ้นมา"
		caption="ดูราคาทุเรียนตามต้องการ"
	/>
</div>
<!-- <Heading tag="h3" class="my-3 mt-5">2. ต้องการซื้อทุเรียนหมอนทอง</Heading>
<ImagePlaceholder class="p-5 inline-block bg-slate-300" />
<ImagePlaceholder class="p-5 inline-block bg-slate-300" /> -->
