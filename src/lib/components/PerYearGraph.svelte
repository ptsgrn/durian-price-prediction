<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
	import { rawData } from '$lib/stores/mockup';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		LineController
	} from 'chart.js';
	import { Bar } from 'svelte-chartjs';
	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		LineController
	);

	let chartData = {
		labels: rawData.map((d) => d[0]),
		datasets: [
			{
				label: 'ราคาพยากรณ์',
				type: 'line',
				backgroundColor: 'rgb(108, 43, 217)',
				hoverBorderColor: 'white',
				fill: false,
				tension: 0,
				data: rawData.map((d) => (d[3] === 'p' ? d[1] : null)),
				yAxisID: 'y',
				xAxisID: 'x'
			},
			{
				label: 'ราคาจริง',
				type: 'line',
				backgroundColor: 'rgb(44, 99, 132)',
				hoverBorderColor: 'white',
				data: rawData.map((d) => (d[3] === 'r' ? d[1] : null)),
				yAxisID: 'y',
				xAxisID: 'x'
			}
		]
	};
	let chartOptions = { responsive: true };
	let width = 600;
	let height = 400;
</script>

<Bar data={chartData} options={chartOptions} />
