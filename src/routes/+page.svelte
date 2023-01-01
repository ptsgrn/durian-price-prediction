<script>
	// import '@carbon/charts/styles.css';
	import { LineChart } from '@carbon/charts-svelte';
	let year = new Date().getFullYear();
	import Heading from '$lib/components/Heading.svelte';

	let durianData = [
		{
			group: 'Dataset 1',
			date: '2018-12-31T17:00:00.000Z',
			value: 50000,
			surplus: 132567867.9623496
		},
		{
			group: 'Dataset 1',
			date: '2019-01-04T17:00:00.000Z',
			value: 65000,
			surplus: 444839243.2373532
		},
		{
			group: 'Dataset 1',
			date: '2019-01-07T17:00:00.000Z',
			value: null,
			surplus: 10592.240668703118
		},
		{
			group: 'Dataset 1',
			date: '2019-01-12T17:00:00.000Z',
			value: 49213,
			surplus: 824287558.3793411
		},
		{
			group: 'Dataset 1',
			date: '2019-01-16T17:00:00.000Z',
			value: 51213,
			surplus: 302805743.9052468
		},
		{
			group: 'Dataset 2',
			date: '2019-01-01T17:00:00.000Z',
			value: 0,
			surplus: 5616.324191698419
		},
		{
			group: 'Dataset 2',
			date: '2019-01-05T17:00:00.000Z',
			value: 57312,
			surplus: 300993472.71380204
		},
		{
			group: 'Dataset 2',
			date: '2019-01-07T17:00:00.000Z',
			value: 27432,
			surplus: 661415149.4980949
		},
		{
			group: 'Dataset 2',
			date: '2019-01-14T17:00:00.000Z',
			value: 70323,
			surplus: 799311332.2908583
		},
		{
			group: 'Dataset 2',
			date: '2019-01-18T17:00:00.000Z',
			value: 21300,
			surplus: 488616839.6071387
		},
		{
			group: 'Dataset 3',
			date: '2018-12-31T17:00:00.000Z',
			value: 40000,
			surplus: 349332068.0839196
		},
		{
			group: 'Dataset 3',
			date: '2019-01-04T17:00:00.000Z',
			value: null,
			surplus: 9544.473353479638
		},
		{
			group: 'Dataset 3',
			date: '2019-01-07T17:00:00.000Z',
			value: 18000,
			surplus: 220338067.08173862
		},
		{
			group: 'Dataset 3',
			date: '2019-01-12T17:00:00.000Z',
			value: 39213,
			surplus: 950804946.1074377
		},
		{
			group: 'Dataset 3',
			date: '2019-01-16T17:00:00.000Z',
			value: 61213,
			surplus: 533857335.1037321
		},
		{
			group: 'Dataset 4',
			date: '2019-01-01T17:00:00.000Z',
			value: 20000,
			surplus: 43616337.54193239
		},
		{
			group: 'Dataset 4',
			date: '2019-01-05T17:00:00.000Z',
			value: 37312,
			surplus: 750905230.3130674
		},
		{
			group: 'Dataset 4',
			date: '2019-01-07T17:00:00.000Z',
			value: 51432,
			surplus: 1259587726.8119051
		},
		{
			group: 'Dataset 4',
			date: '2019-01-14T17:00:00.000Z',
			value: 25332,
			surplus: 180054152.95655483
		},
		{
			group: 'Dataset 4',
			date: '2019-01-18T17:00:00.000Z',
			value: null,
			surplus: 4925.744241322976
		}
	];
</script>

<main class="container">
	<Heading tag="h1">กราฟพยากรณ์ราคาทุเรียนปี {year}</Heading>
	<LineChart
		data={durianData}
		options={{
			title: 'Line (time series)',
			axes: {
				bottom: {
					title: '2019 Annual Sales Figures',
					mapsTo: 'date',
					scaleType: 'time'
				},
				left: {
					mapsTo: 'value',
					title: 'Conversion rate',
					scaleType: 'linear'
				}
			},
			curve: 'curveMonotoneX',
			height: '400px'
		}}
	/>
</main>
