<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
	import Heading from '$lib/components/Heading.svelte';
	import P from '$lib/components/P.svelte';
	import { Img, Li, List } from 'flowbite-svelte';
	// @ts-ignore
	import ImgPredictGraph1 from '$lib/assets/imgs/messageImage_1693530739843.jpg?w=300;500;700;1000;1200&format=webp&srcset';
	// @ts-ignore
	import ImgPredictGraph2 from '$lib/assets/imgs/messageImage_1693529972059.jpg?w=300;500;700;1000;1200&format=webp&srcset';
</script>

<svelte:head>
	<title>เกี่ยวกับ - พยากรณ์ราคาทุเรียนหมอนทอง</title>
</svelte:head>
<Heading tag="h2" class="mt-2">เกี่ยวกับเว็บไซต์</Heading>
<Img
	srcset={ImgPredictGraph1}
	class="img-fluid shadow-md dark:shadow-gray-800 mx-auto"
	alignment="mx-auto"
	figClass="text-center"
	alt="กราฟที่ 1 แสดงข้อมูลราคาทุเรียนตั้งแต่เดือนเมษายน-เดือนกันยายน พ.ศ. 2542-2562"
	caption="กราฟที่ 1 แสดงข้อมูลราคาทุเรียนตั้งแต่เดือนเมษายน-เดือนกันยายน พ.ศ. 2542-2562"
/>
<Heading tag="h3" class="my-3 mt-5">ที่มาและความสำคัญ</Heading>
<P class="font-loop" justify>
	ทุเรียน หรือที่ใครๆต่างรู้จักกันในชื่อ ราชาแห่งผลไม้ เป็นผลไม้ตาม
	ฤดูกาลที่ถือว่ามีความสำคัญต่อภาคเกษตรไทย และยังเป็นผลไม้ ส่งออกอันดับ 1
	ในกลุ่มผลไม้ไทยที่ส่งออกไปยังตลาดทั่วโลก ถึงแม้ว่าในยุคปัจจุบันจะมีการแพร่ระบาดของโควิด 19
	ที่เริ่มส่งผล ตั้งแต่ปลายปี2562 แต่การส่งออกทุเรียนยังสามารถขยายตัวได้ดี
	อย่างต่อเนื่องตามความต้องการของผู้บริโภคโดยเฉพาะประเทศจีน ที่นับว่าเป็นตลาดหลัก ซึ่งในปี2563
	มีปริมาณการส่งออกทุเรียนสด 620892.72 ตัน มูลค่า 2072.79 ล้านเหรียญสหรัฐ คิดเป็นร้อยละ 77.33
	ของมูลค่าการส่งออกทุเรียนสดของโลก แต่จากปัญหาที่ เกษตรกรประสบในทุกๆปี คือ
	มีผลผลิตล้นตลาดในช่งที่มีการออก ผลผลิตพร้อมๆกัน ทำให้ราคาของผลผลิตตกต่ำ เกษตรกรจึงพบกับ ภาวะขาดทุน
	ดังนั้นพวกเราจึงมีความสนใจที่จะศึกษาและสร้างตัวแบบพยากรณ์ โดยนำข้อมูลในช่วงปี 2548 - 2562
	มาทำเป็นกราฟเพื่อดูแนวโน้ม ราคาทุเรียนตั้งแต่อดีตจนถึงปัจจุบันเบื้องต้น ซึ่งผลจากการ พยากรณ์ที่ได้
	จะเป็นจุดเริ่มต้นของการตัดสินใจและบริหารจัดการ ด้านความเสี่ยงต่างๆ เช่น
	ช่วยให้ผู้ผลิตสามารถคาดการณ์ราคา ทุเรียนหมอนทองได้ล่วงหน้า เป็นข้อมูลเพื่อวางแผนในการปลูก
</P>
<Heading tag="h3" class="my-3 mt-5">วัตถุประสงค์</Heading>
<P class="font-loop">
	เพื่อเปรียบเทียบตัวแบบพยากรณ์ราคาทุเรียนวิธีต่าง ๆ
	ที่มีความถูกต้องและเหมาะสมมากที่สุดในการพยากรณ์ราคาทุเรียน
</P>
<Img
	srcset={ImgPredictGraph2}
	class="img-fluid shadow-md dark:shadow-gray-800 mx-auto"
	alignment="mx-auto"
	figClass="text-center"
	alt="กราฟที่ 2 การเปรียบเทียบตัวแบบพยากรณ์ราคาทุเรียนโดยวิธีพยากรณ์ทางสถิติ"
	caption="กราฟที่ 2 การเปรียบเทียบตัวแบบพยากรณ์ราคาทุเรียนโดยวิธีพยากรณ์ทางสถิติ"
/>
<Heading tag="h3" class="my-3 mt-5">สรุปผลการทดลอง</Heading>
<P class="font-loop">
	การศึกษาครั้งนี้มีวัตถุประสงค์เพื่อเปรียบเทียบแบบจำลองการพยากรณ์ราคาทุเรียนแบบต่าง ๆ
	ที่มีความแม่นยำและเหมาะสมที่สุดในการพยากรณ์ราคาทุเรียน โดยใช้วิธีการถดถอยเชิงเส้นอย่างง่าย,
	การถดถอยแบบโพลิโนเมียล, exponential model, power equation และ saturation-Growth-Rate equation.
	พบว่าวิธีการถดถอยแบบโพลิโนเมียล มีค่าพยากรณ์เข้าใกล้เคียงข้อมูลจริงมากที่สุด และมีค่า MAPE
	และค่าRMSE ซึ่งเป็นค่าเปอร์เซ็นต์ความคลาดเคลื่อนและกำลังสองความคลาดเลื่อนต่ำที่สุดเท่ากับ 9.36%
	และ11.47 ตามลำดับ จึงมีความถูกต้องและเหมาะสมมากที่สุดในการพยากรณ์ราคาทุเรียน
	รองลงมาได้แก่วิธีการถดถอยเชิงเส้นอย่างง่าย, exponential model, power equation และ
	saturation-Growth-Rate equation.
	ซึ่งมีความคลาดเคลื่อนสูงกว่าเนื่องจากกราฟราคาทุเรียนไม่สอดคล้องกับสมการ
</P>

<Heading tag="h3" class="my-3 mt-5">ช่องทางติดต่อผู้ทำโครงงาน</Heading>
<div>
	<P>
		<List color="black" list="none">
			<Li
				><b>นางสาวธัญญาภรณ์ ผลจันทร์</b>
				<List list="none">
					<Li
						>Email:&nbsp;<a
							href="mailto:thunyapornphonchan@pccbr.ac.th"
							class="underline text-purple-700">thunyapornphonchan@pccbr.ac.th</a
						></Li
					>
					<Li>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย บุรีรัมย์</Li>
				</List>
			</Li>
			<Li>
				<b>นางสาวสุธิรา ศรีชัย</b>
				<List tag="ul" list="none">
					<Li
						>Email:&nbsp;<a
							href="mailto:suthirasrichai@pccbr.ac.th"
							class="underline text-purple-700">suthirasrichai@pccbr.ac.th</a
						></Li
					>
					<Li>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย บุรีรัมย์</Li>
				</List>
			</Li>
		</List>
	</P>
</div>
