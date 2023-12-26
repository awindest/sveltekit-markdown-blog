<script>
	import { Rss } from 'lucide-svelte'
</script>

<a href="/rss.xml" target="_blank">
	<button aria-label="RSS feed">
		<div>
			<Rss />
			<span>RSS</span>
		</div>
	</button>
</a>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: 2px;
		box-shadow: none;
		overflow: hidden;
		color: inherit;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
