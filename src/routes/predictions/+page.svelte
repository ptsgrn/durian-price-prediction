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
      monthYear: '2022-05',
      price: 150
    },
    {
      monthYear: '2022-06',
      price: 150
    },
    {
      monthYear: '2022-07',
      price: 150
    },
    {
      monthYear: '2022-08',
      price: 150
    },
    {
      monthYear: '2022-09',
      price: 150
    },
    {
      monthYear: '2022-10',
      price: 150
    },
    {
      monthYear: '2022-11',
      price: 150
    },
    {
      monthYear: '2022-12',
      price: 150
    }
	];
</script>

<Heading tag="h1">พยากรณ์ราคา</Heading>
<div class="grid grid-flow-row border-2 border-blue-700 p-5">
	<div>
		<Heading tag="h2">พยากรณ์ราคาทุเรียนหมอนทอง</Heading>
		<span>เดือน {currentMonth} ปี {currentYear}</span>
		<span>159</span>
		<span>บาท/กิโลกรัม</span>
		<div />
	</div>
	<div />
</div>
