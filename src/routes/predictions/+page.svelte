<script>
	import Heading from '$lib/components/Heading.svelte';
	const formatMonth = Intl.DateTimeFormat('th-TH', { month: 'long' }).format;
	const formatYear = Intl.DateTimeFormat('th-TH', { year: 'numeric' }).format;

	const priceData = [
		{
			monthYear: '2021-01',
			price: 159
		},
		{
			monthYear: '2021-02',
			price: 123
		},
		{
			monthYear: '2021-03',
			price: 123
		},
		{
			monthYear: '2021-04',
			price: 123
		},
		{
			monthYear: '2021-05',
			price: 123
		},
		{
			monthYear: '2021-06',
			price: 123
		},
		{
			monthYear: '2021-07',
			price: 123
		},
		{
			monthYear: '2021-08',
			price: 123
		},
		{
			monthYear: '2021-09',
			price: 123
		},
		{
			monthYear: '2021-10',
			price: 123
		},
		{
			monthYear: '2021-11',
			price: 123
		},
		{
			monthYear: '2021-12',
			price: 123
		},
		{
			monthYear: '2022-01',
			price: 150
		},
		{
			monthYear: '2022-02',
			price: 150
		},
		{
			monthYear: '2022-03',
			price: 150
		},
		{
			monthYear: '2022-04',
			price: 150
		},
		{
			monthYear: '2023-05',
			price: 150
		},
		{
			monthYear: '2023-06',
			price: 150
		},
		{
			monthYear: '2023-07',
			price: 150
		},
		{
			monthYear: '2023-08',
			price: 150
		},
		{
			monthYear: '2023-09',
			price: 150
		},
		{
			monthYear: '2023-10',
			price: 150
		},
		{
			monthYear: '2023-11',
			price: 150
		},
		{
			monthYear: '2023-12',
			price: 150
		}
	];
	/**
	 * @type {string | null}
	 */
	let previousYear = null;
	let currentYear = null;
</script>

<Heading tag="h1">พยากรณ์ราคา</Heading>
<div class="grid grid-flow-row border-2 border-blue-700 p-5">
	<div>
		<Heading tag="h2">พยากรณ์ราคาทุเรียนหมอนทอง</Heading>
		<span
			>เดือน
			<select name="Month" id="0" class="month-sleect">
				{#each priceData as { monthYear, price }, i (monthYear)}
					{#if formatYear(new Date()) === formatYear(new Date(monthYear))}
						<option value={i}>{formatMonth(new Date(monthYear))}</option>
					{/if}
				{/each}
			</select>
			ปี
			<select name="Years" id="1" class="year-sleect">
				{#each priceData as { monthYear, price }, i (monthYear)}
					{#if i != 0}
						{(previousYear = formatYear(new Date(priceData[i - 1].monthYear)))}
					{/if}
					{(currentYear = formatYear(new Date(priceData[i].monthYear)))}
					{#if previousYear != currentYear}
						<option value={i}>{currentYear}</option>
					{/if}
				{/each}
			</select></span>
		<div class="flex items-center justify-between">
			<button><span class="material-symbols-outlined items-center"> arrow_back <span>ก่อนหน้า</span></span></button>
			<div class="text-center"><span class="text-[20vw]">159</span><span>บาท/กิโลกรัม</span></div>
			<button><span class="material-symbols-outlined items-center"> <span>ไปหน้า</span> arrow_forward</span></button>
		</div>
		<button class="flex items-center p-3 border-2 border-blue-700"
			><span class="material-symbols-outlined">search</span>แสดงข้อมูลล่าสุด</button
		>
	</div>
	<div />
</div>
<Heading tag='h2'>พยากรณ์ราคาล่วงหน้า 5 เดือน</Heading>
