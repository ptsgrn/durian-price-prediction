<script>
	export let title = 'Title';
	export let description = 'Description';
	export let image = 'https://via.placeholder.com/150';
	export let link = '#';
	import { Button } from 'flowbite-svelte';
	export let price = 123;
</script>

<div class="container">
	<img src={image} alt={title} />
	<b><h1>{title}</h1></b>
	<p>{description}</p>
	<a href={link} class="">Buy</a>
	<slot />
</div>

<style>
	.container {
		padding: 4px;
		width: auto;
		display: block;
	}
	.container img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}
	.container a {
		display: block;
		text-align: center;
		background-color: #f1f1f1;
		padding: 8px;
		border-radius: 4px;
		text-decoration: none;
		color: #000;
	}
	.container a:hover {
		background-color: #ddd;
	}
</style>
