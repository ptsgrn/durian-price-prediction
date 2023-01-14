<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { clampSize } from 'flowbite-svelte/forms/Input.svelte';
	import { stringify } from 'postcss';
	import { rawData } from '$lib/stores/mockup.js';
	const formatMonth = Intl.DateTimeFormat('th-TH', { month: 'long' }).format;
	const formatYear = Intl.DateTimeFormat('th-TH', { year: 'numeric' }).format;

	const formatDateString = (date: Date) => {
		return left0pad(date.getFullYear(), 4) + '-' + left0pad(date.getMonth() + 1, 2);
	};
	interface PriceData {
		monthYear: string;
		price: number;
	}

	const priceData: PriceData[] = rawData.map((item) => {
		return {
			monthYear: formatDateString(new Date(item[2])),
			price: Number(item[1])
		};
	});
	const nowDate = new Date('2022-09');
	let currentDateString = formatDateString(nowDate);
	function left0pad(num: number, size: number) {
		var s = num + '';
		while (s.length < size) s = '0' + s;
		return s;
	}
	let currentDate = new Date(currentDateString);
	$: currentDate = new Date(currentDateString);
	$: currentYear = currentDate.getFullYear();
	$: currentMonth = left0pad(currentDate.getMonth() + 1, 2);
	$: listMonth = priceData.filter((item) => item.monthYear.startsWith(String(currentYear)));
	$: listYear = Array.from(
		new Set(priceData.map((item) => new Date(item.monthYear).getFullYear()))
	);
	$: currentPriceIndex = priceData.findIndex((item) => item.monthYear === currentDateString);
</script>

<svelte:head>
	<title>การพยากรณ์</title>
</svelte:head>

<Heading tag="h1">พยากรณ์ราคา</Heading>
<div class="grid grid-flow-row border-4 border-blue-700 p-5 mt-5 mb-20">
	<div>
		<Heading tag="h2"
			>พยากรณ์ราคาทุเรียนหมอนทอง เดือน {formatMonth(currentDate)} ปี พ.ศ.&nbsp;{currentYear +
				543}</Heading
		>
		<div class="font-loop">
			เดือน
			<Button size="xs" class="w-28"><Chevron>{formatMonth(currentDate)}</Chevron></Button>
			<Dropdown name="month">
				{#each listMonth as { monthYear }}
					<DropdownItem
						on:click={() => {
							currentDateString = monthYear;
						}}
						value={monthYear}>{formatMonth(new Date(monthYear))}</DropdownItem
					>
				{/each}
			</Dropdown>
			ปี <Button size="xs"><Chevron>{formatYear(currentDate)}</Chevron></Button><Dropdown
				frameClass="overflow-auto max-h-48 miniscrollbar"
			>
				{#each listYear as y}
					<DropdownItem
						on:click={() => {
							if (
								priceData.filter((item) => item.monthYear === `${y}-${currentMonth}`).length === 0
							) {
								currentDateString = `2022-04`;
								return;
							}
							currentDateString = `${y}-${currentMonth}`;
						}}
						value={y}>{formatYear(new Date(`${y}-04`))}</DropdownItem
					>
				{/each}
			</Dropdown>
		</div>
		<div class="text-center max-md:flex max-md:flex-col">
			<span class="text-[14vw]"
				>{Math.round(
					(priceData.filter((item) => item.monthYear === `${currentYear}-${currentMonth}`)[0]
						.price +
						Number.EPSILON) *
						100
				) / 100}</span
			>
			<span class="text-gray-700 max-md:mb-7">บาท/กิโลกรัม</span>
		</div>
		<div class="flex items-center justify-between">
			<Button
				disabled={currentPriceIndex === 0}
				size="sm"
				on:click={() => {
					currentDateString = priceData[currentPriceIndex - 1].monthYear;
				}}
			>
				<svg
					viewBox="0 -6.5 38 38"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					class="mr-2 -ml-1 w-5 h-5 fill-current"
					><g>
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g transform="translate(-1641, -158)" fill="currentColor" fill-rule="nonzero">
								<g id="1" transform="translate(1350, 120)">
									<path
										d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
										id="left-arrow"
										transform="translate(310, 50.5) scale(-1, 1) translate(-310, -50.5) "
									/>
								</g>
							</g>
						</g>
					</g></svg
				>
				<span class="hidden sm:inline">เดือน</span>ก่อนหน้า
			</Button>

			<Button
				size="sm"
				disabled={currentDateString === formatDateString(nowDate)}
				on:click={() => {
					currentDateString = formatDateString(nowDate);
				}}><span class="hidden sm:inline">แสดงข้อมูล</span>ปัจจุบัน</Button
			>
			<Button
				size="sm"
				disabled={currentPriceIndex === priceData.length - 1}
				on:click={() => {
					currentDateString = priceData[currentPriceIndex + 1].monthYear;
				}}
			>
				<span class="hidden sm:inline">เดือน</span>ถัดไป
				<svg
					viewBox="0 -6.5 38 38"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					class="ml-2 -mr-1 w-5 h-5 fill-current"
					><g>
						<g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g transform="translate(-1511, -158)" fill="currentColor" fill-rule="nonzero">
								<g id="1" transform="translate(1350, 120)">
									<path
										d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
									/>
								</g>
							</g>
						</g>
					</g></svg
				>
			</Button>
		</div>
	</div>
</div>

<style>
	.miniscrollbar::-webkit-scrollbar {
		width: 0.5rem;
	}
	.miniscrollbar::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	.miniscrollbar::-webkit-scrollbar-thumb {
		background: #888;
	}
	.miniscrollbar::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
