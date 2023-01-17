<!--
 Copyright (c) 2023 Patsagorn Y.
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<script>
	import { graphData } from '$lib/stores/mockup.js'
  import { onMount } from 'svelte';
  import c3 from 'c3';
  import 'c3/c3.css'
	const monthNamesList = ["เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน"];
  onMount(()=>{
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', ...monthNamesList],
					...graphData
        ]
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });
  })
</script>

<figure>
  <div id="chart"></div>
</figure>