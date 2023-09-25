<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

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

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>