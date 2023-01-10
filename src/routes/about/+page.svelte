<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
	import Heading from '$lib/components/Heading.svelte';
	import P from '$lib/components/P.svelte';
	import { Li, List, Skeleton } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>เกี่ยวกับ</title>
</svelte:head>
<Heading tag="h2" class="mt-2">เกี่ยวกับเว็บไซต์</Heading>
<Heading tag="h3" class="my-3 mt-5">ที่มาและความสำคัญ</Heading>
<P class="font-loop">
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

<Heading tag="h3" class="my-3 mt-5">ช่องทางติดต่อผู้ทำโครงงาน</Heading>
<div class="grid grid-cols-2">
	<P>
		<List color="black" class="list-none">
			<Li
				><b>นางสาวธัญญาภรณ์ ผลจันทร์</b>
				<List class="list-['-\00a0']">
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
				<List class="list-['-\00a0']">
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
