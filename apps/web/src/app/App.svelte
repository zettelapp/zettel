<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { ui } from '@zettel/ui'
	
	console.log(ui())

    let count: number = 0
    const increment = () => {
      count += 1
    }
</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<Avatar src="https://i.pravatar.cc/" />

<button on:click={increment}>
  count is {count}
</button>