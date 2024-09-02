<script>
	import {onMount} from 'svelte'
	import { formatDate } from '$lib/utils'
	import { randomInt } from 'd3-random'
	import * as config from '$lib/config'
	import { CornerDownLeft } from 'lucide-svelte'

	export let data
	let len
	let delays // a Set to store an array of delays
	function randomArrayOfDelays() {
		// data.posts.forEach(console.log(data.posts))
		let d = Object.keys(data.posts) // change to an array so we can get the length to create an array of delays for the shimmer effect
		len = d.length
		d.forEach( (e) => {
		console.log(d.length, randomInt(1, d.length)())
		})
		const delays = new Set();
		while(delays.size !== d.length) {
  				delays.add(Math.floor(Math.random() * d.length) + 1);
		}
		console.log([...delays])
	}
	function getRandomNumber(min, max) {
    	return Math.ceil(Math.random() * (max - min)) + min - 1;
	}
	function getDelay() {
		let delay = delays(-1)
		delays(-1).delete
		console.log('returning delay', delay)
		return delay
	}
	// usage:
	// console.log(getRandomNumber(1, 10)); // Output: random number between 1 and 10

	// onMount( () => {
		randomArrayOfDelays()
	// })
	function handleMouseEnter(event) {
				let BBox = event.target.getBoundingClientRect()
				// let el = document.querySelector(this)
				console.log(BBox, event)
			}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post glow-effect" on:mouseenter={handleMouseEnter}>
				<a href={post.slug} class="title"
					>{post.title}
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</a>
				<svg class="glow-container">
					<rect pathLength="100" stroke-linecap="round" class="glow-blur"></rect>
					<rect pathLength="100" stroke-linecap="round" class="glow-line"></rect>
				</svg>
				<div class="shimmer" style="--delay: {-randomInt(1, len) + 's'}"></div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-7);
	}

	.post {
		position: relative;
		animation:
			var(--animation-slide-in-right),
			var(--animation-fade-in) forwards;
		animation-delay: calc(var(--_delay) * 100ms);
		animation-timing-function: var(--ease-squish-1);
		background: var(--surface-2);
		box-shadow: var(--shadow-5);
		align-items: center;
		border-radius: var(--radius-conditional-2);
		max-inline-size: var(--size-content-3);
		padding: var(--size-2) var(--size-4);
		width: 30%;
		/* outline: 3px solid #ff0080; */
	}
	.post:before {
		content: '';
		background: linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0);
		position: absolute;
		top: -2px;
		left: -2px;
		-webkit-background-size: 400%;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		/* animation: animate 20s linear infinite; */
		animation: gradient-background-anim 8s ease-in-out infinite;

		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.post:hover:before {
		opacity: 1;
		outline: 3px solid blue;
	}

	.post:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: var(--surface-2);
		left: 0;
		top: 0;
	}
	.post img {
		aspect-ratio: var(--ratio-box);
		border-radius: var(--radius-round);
		width: var(--size-7);
	}
	.post:not(:last-child) {
		/* border-bottom: 1px solid var(--border); */
		padding-bottom: var(--size-7);
	}
	.post .shimmer {
		background: linear-gradient(
			112deg,
			transparent 30%,
			rgba(var(--geist-foreground-rgb), 0.1) 40%,
			rgba(var(--geist-foreground-rgb), 0.3) 50%,
			rgba(var(--geist-foreground-rgb), 0.1) 60%,
			transparent 80%
		);
		position: absolute;
		inset: 0;
		z-index: 20;
		pointer-events: none;
		border-radius: inherit;
		background-size: 200% auto;
		background-position: 0;
		animation: shimmer 18s cubic-bezier(0.8, 0, 0.05, 1) infinite;
		animation-delay: var(--delay);
	}
	/* @media (--motionOK) {
		animation: var(--animation-fade-in);
	} */
	@keyframes shimmer {
		0% {
			opacity: 0;
		}

		5% {
			opacity: 0;
			background-position: -50%;
		}

		10% {
			opacity: 0.7;
		}

		15% {
			opacity: 0;
			background-position: 150%;
		}

		20% {
			opacity: 0;
		}

		to {
			opacity: 0;
		}
	}
	.gradient-glow {
		position: relative;
		display: inline-block;
	}

	.gradient-glow li:before,
	.gradient-glow li:after {
		content: '';
		position: absolute;
		inset: 0;
		background: #f00;
		transition: 0.5s;
	}

	.gradient-glow li:nth-child(1):before,
	.gradient-glow li:nth-child(1):after {
		background: linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0);
		background-size: 400% 100%;
		border: none;
		padding: 0;
		margin: 0;
		animation: gradient-background-anim 8s ease-in-out infinite;
		opacity: 0;
	}

	.gradient-glow li:hover:before {
		/* used to be -3px */
		inset: -1px;
	}

	.gradient-glow li:hover:after {
		/* used to be -3px */
		inset: -1px;
		filter: blur(10px);
		opacity: 1;
	}

	.gradient-glow li span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: inline-block;
		background: #0e1538;
		border-radius: inherit;
		border-radius: 12px;

		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	@keyframes animate {
		0% {
			background-position: 0 0;
		}

		50% {
			background-position: 400% 0;
		}

		100% {
			background-position: 0 0;
		}
	}

	@keyframes gradient-background-anim {
		50% {
			background-position: 140% 50%;
			transform: skew(-2deg);
		}
	}
	.title {
		font-size: var(--font-size-fluid-3);
		line-height: var(--font-lineheight-1);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	.glow-effect {
		/* from Kevin Powell */
		--glow-line-color: #fff;
		--glow-line-thickness: 2px;
		--glow-line-length: 20px;
		--glow-blur-color: #fff;
		--glow-blur-size: 5px;
		--glow-offset: 0px;
		--animation-speed: 1200ms;
		/* do not change, used for calculations; this value 
		is used for sizing the svg viewport a bit larger than the container so the blur isn't clipped */
		--container-offset: 10px;
		position: relative;
		/* position: absolute; */
	}

	.glow-container {
		pointer-events: none;
		position: absolute;
		/* inset: calc(var(--container-offset) / -2); */
		inset: 0;
		/* width: calc(100% + var(--container-offset));
		height: calc(100% + var(--container-offset)); */
		width: 100%;
		height: 100%;
		opacity: 0;
		outline: 3px solid blue;
	}

	.glow-blur,
	.glow-line {
		width: calc(100% - var(--container-offset) + var(--glow-offset));
		height: calc(100%  - var(--container-offset) + var(--glow-offset));
		x: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		y: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		fill: transparent;
		stroke: black;
		stroke-width: 5px;
		stroke-dasharray: var(--glow-line-length) calc(50px - var(--glow-line-length));
	}

	.glow-effect:is(:hover, :focus) :is(.glow-line, .glow-blur) {
		stroke-dashoffset: -80px;
		transition: stroke-dashoffset var(--animation-speed) ease-in;
	}

	.glow-line {
		stroke: var(--glow-line-color);
		stroke-width: var(--glow-line-thickness);
	}

	.glow-blur {
		filter: blur(var(--glow-blur-size));
		stroke: var(--glow-blur-color);
		stroke-width: var(--glow-blur-size);
	}

	.glow-effect:is(:hover, :focus) .glow-container {
		animation: glow-visibility ease-in-out var(--animation-speed);
	}

	@keyframes glow-visibility {
		0%,
		100% {
			opacity: 0;
		}
		25%,
		75% {
			opacity: 1;
		}
	}

	.glow-effect[data-glow-animation='false'] {
		--glow-line-length: 50px;
	}
	.glow-effect[data-glow-offset='true'] {
		--glow-offset: 10px;
	}

	.glow-effect[data-glow-animation='grow']:is(:hover, :focus) .glow-container {
		scale: 1.3;
		transition: scale var(--animation-speed) linear;
	}
</style>
