<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script lang="ts">
	export let name: string;
	export let address: string;
	export let phone: string;
	export let price: number;
	export let image: string;
	export let id: number;
</script>

<a
	href={`/markets`}
	class="flex flex-col w-96 border-4 border-purple-300 p-2 my-3 text-gray-700 gap-3
md:w-60 md:inline-block md:snap-start
hover:shadow-lg hover:border-purple-500 duration-150 hover:border-4
active:shadow-md active:scale-95
group"
>
	<img
		src={image}
		class="aspect-video"
		alt={`ไปยังหน้าซื้อทุเรียนราคา ${price} บาทต่อกิโลกรัม ของ ${name} อยู่ที่ ${address}`}
	/>
	<div
		class="grid grid-rows-3 items-center my-2 grid-cols-[auto_140px] 
  md:grid-cols-1 md:grid-rows-4 md:grid-flow-row-dense"
	>
		<span class="col-span-2 md:col-span-1">ชื่อ: {name}</span>
		<span class="">ที่อยู่: {address}</span>
		<div
			class="row-span-3 text-right flex items-end flex-wrap justify-end align-end
    md:row-span-1 md:order-4 md:text-center md:items-center md:justify-center"
		>
			<span
				class="text-3xl mr-2 text-purple-800 font-semibold
			group-hover:text-4xl group-hover:text-bold duration-75"
				>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span
			>บาท/กก.
		</div>
		<span>เบอร์โทร: {phone}</span>
	</div>
</a>
