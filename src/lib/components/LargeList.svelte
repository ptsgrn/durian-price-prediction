<script>
    export let title = 'Title';
    export let description = 'Description';
    export let image = 'https://via.placeholder.com/150';
    export let link = '#';
    import {
        Button
	} from 'flowbite-svelte';
    export let price = 123;
</script>

<style>
    .container{
        padding: 4px;
        width: auto;
        display: block;
    }
</style>

<div class="container">
    <img src={image} alt="{title}"/>
    <b><h1>{title}</h1></b>
    <p>{description}</p>
    <a href={link} class="">Buy</a>
</div>