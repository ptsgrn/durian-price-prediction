<script>
	import Heading from '$lib/components/Heading.svelte';
	import { Img } from 'flowbite-svelte';
	// @ts-ignore
	import Step11 from '$lib/assets/imgs/1step1.jpg?w=300;500;700;900&format=webp&srcset';
	// @ts-ignore
	import Step12 from '$lib/assets/imgs/1step2.jpg?w=300;500;700;900&format=webp&srcset';
	// @ts-ignore
	import Step13 from '$lib/assets/imgs/1step3.jpg?w=300;500;700;900&format=webp&srcset';
	// @ts-ignore
	import Step21 from '$lib/assets/imgs/2step1.jpg?w=300;500;700;900&format=webp&srcset';
	// @ts-ignore
	import Step22 from '$lib/assets/imgs/2step2.jpg?w=300;500;700;900&format=webp&srcset';
</script>

<svelte:head>
	<title>วิธีใช้งาน - พยากรณ์ราคาทุเรียนหมอนทอง</title>
</svelte:head>

<Heading tag="h2" class="mt-2">วิธีใช้งาน</Heading>
<Heading tag="h3" class="my-3 mt-5">1. ต้องการทราบราคาทุเรียนจากการพยากรณ์</Heading>
<div class="grid grid-col-1 md:grid-cols-2">
	<Img
		srcset={Step11}
		class="shadow-md my-5 md:mx-3"
		alt="ภาพหน้าหลัก มีการไฮไลต์บริเวณที่เพื่อไปยังหน้าการพยากรณ์ราคา"
		caption="คลิกที่พยากรณ์ราคาทุเรียน"
	/>
	<Img
		srcset={Step12}
		class="shadow-md my-5 md:mx-3"
		alt="ภาพหน้าพยากรณ์ราคา มีปุ่มที่มีชื่อเดือนเพื่อเปลี่ยนราคาที่แสดงเป็นเดือนที่ต้องการได้"
		caption="กรอกข้อมูลเดือนและปีที่ต้องการทราบ"
	/>
	<Img
		srcset={Step13}
		class="shadow-md my-5 md:mx-3"
		alt="เมื่อเลือกเดือนเรียบร้อยแล้ว ราคาที่พยากรณ์ในเดือนนั้น ๆ จะแสดงขึ้นมา"
		caption="ดูราคาทุเรียนตามต้องการ"
	/>
</div>

<Heading tag="h3" class="my-3 mt-5">2. ต้องการซื้อทุเรียนหมอนทอง</Heading>
<div class="grid grid-col-1 md:grid-cols-2">
	<Img
		srcset={Step21}
		class="shadow-md my-5 md:mx-3"
		alt="เลือกเมนู ร้านค้า"
		caption="เลือกเมนูร้านค้า"
	/>
	<Img
		srcset={Step22}
		class="shadow-md my-5 md:mx-3"
		alt="เลือกร้านค้าที่สนใจ"
		caption="เลือกร้านค้าที่สนใจ ติดต่อร้านค้าเพื่อสั่งซื้อได้เลย!"
	/>
</div>
