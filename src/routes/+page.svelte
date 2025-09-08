<script lang="ts">
	import { onMount } from 'svelte';
	
	let showButton = false;
	let animationPhase = 'loading';
	
	onMount(() => {
		setTimeout(() => {
			animationPhase = 'reveal';
			setTimeout(() => {
				animationPhase = 'particles';
				setTimeout(() => {
					animationPhase = 'complete';
					setTimeout(() => {
						showButton = true;
					}, 2000);
				}, 3000);
			}, 2000);
		}, 1000);
	});
</script>

<svelte:head>
	<title>streetr Beta</title>
</svelte:head>

<main class="splash-container" class:loading={animationPhase === 'loading'} class:reveal={animationPhase === 'reveal'} class:particles={animationPhase === 'particles'} class:complete={animationPhase === 'complete'}>
	<div class="background-animation">
		<div class="gradient-orb gradient-orb-1"></div>
		<div class="gradient-orb gradient-orb-2"></div>
		<div class="gradient-orb gradient-orb-3"></div>
	</div>
	
	<div class="particle-field">
		{#each Array(50) as _, i}
			<div class="particle" style="--delay: {i * 0.1}s; --x: {Math.random() * 100}%; --y: {Math.random() * 100}%;"></div>
		{/each}
	</div>
	
	<div class="content">
		<div class="logo-container">
			<h1 class="main-title">
				<span class="letter" style="--delay: 0.1s;">S</span>
				<span class="letter" style="--delay: 0.2s;">T</span>
				<span class="letter" style="--delay: 0.3s;">R</span>
				<span class="letter" style="--delay: 0.4s;">E</span>
				<span class="letter" style="--delay: 0.5s;">E</span>
				<span class="letter" style="--delay: 0.6s;">T</span>
				<span class="letter" style="--delay: 0.7s;">R</span>
			</h1>
			<div class="glow-effect"></div>
		</div>
		
		<div class="subtitle">
			<span class="typewriter">Your social life, upgraded</span>
		</div>
		
		<div class="loading-bar">
			<div class="loading-progress"></div>
		</div>
		
		{#if showButton}
			<button class="beta-button" on:click={() => {}}>
				The beta is now over, stay tuned for more!
			</button>
		{/if}
	</div>
	
	<div class="cosmic-elements">
		<div class="star star-1">✦</div>
		<div class="star star-2">✧</div>
		<div class="star star-3">✦</div>
		<div class="star star-4">✧</div>
		<div class="star star-5">✦</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');
	
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
		background: #000;
		font-family: 'Exo 2', sans-serif;
	}
	
	.splash-container {
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(ellipse at center, #1a0033 0%, #000000 70%);
		overflow: hidden;
	}
	
	.background-animation {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	.gradient-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		animation: float 8s ease-in-out infinite;
	}
	
	.gradient-orb-1 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.2) 50%, transparent 70%);
		top: 20%;
		left: 10%;
		animation-delay: 0s;
	}
	
	.gradient-orb-2 {
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, rgba(199, 21, 133, 0.15) 50%, transparent 70%);
		top: 60%;
		right: 15%;
		animation-delay: -3s;
	}
	
	.gradient-orb-3 {
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 70%);
		bottom: 10%;
		left: 30%;
		animation-delay: -6s;
	}
	
	@keyframes float {
		0%, 100% { transform: translateY(0px) scale(1); }
		33% { transform: translateY(-30px) scale(1.1); }
		66% { transform: translateY(20px) scale(0.9); }
	}
	
	.particle-field {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		pointer-events: none;
	}
	
	.particle {
		position: absolute;
		width: 2px;
		height: 2px;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
		animation: particleFloat 15s linear infinite;
		animation-delay: var(--delay);
		left: var(--x);
		top: var(--y);
	}
	
	.splash-container.particles .particle {
		animation-play-state: running;
		opacity: 1;
	}
	
	@keyframes particleFloat {
		0% {
			transform: translateY(100vh) scale(0);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-100vh) scale(1);
			opacity: 0;
		}
	}
	
	.content {
		position: relative;
		z-index: 10;
		text-align: center;
		color: white;
	}
	
	.logo-container {
		position: relative;
		margin-bottom: 2rem;
	}
	
	.main-title {
		font-family: 'Orbitron', monospace;
		font-size: clamp(3rem, 10vw, 6rem);
		font-weight: 900;
		margin: 0;
		letter-spacing: 0.15em;
		position: relative;
		display: inline-block;
	}
	
	.letter {
		display: inline-block;
		opacity: 0;
		transform: translateY(100px) rotateX(90deg);
		animation: letterReveal 1s ease-out forwards;
		animation-delay: var(--delay);
		text-shadow: 
			0 0 10px rgba(255, 255, 255, 0.8),
			0 0 20px rgba(138, 43, 226, 0.6),
			0 0 40px rgba(138, 43, 226, 0.4);
	}
	
	.splash-container.reveal .letter {
		animation-play-state: running;
	}
	
	@keyframes letterReveal {
		0% {
			opacity: 0;
			transform: translateY(100px) rotateX(90deg);
		}
		50% {
			opacity: 0.5;
			transform: translateY(-20px) rotateX(0deg);
		}
		100% {
			opacity: 1;
			transform: translateY(0) rotateX(0deg);
		}
	}
	
	.glow-effect {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 120%;
		height: 120%;
		background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.3) 0%, transparent 70%);
		transform: translate(-50%, -50%);
		opacity: 0;
		animation: glowPulse 3s ease-in-out infinite;
		animation-delay: 2s;
		z-index: -1;
	}
	
	.splash-container.reveal .glow-effect {
		animation-play-state: running;
	}
	
	@keyframes glowPulse {
		0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
		50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
	}
	
	.subtitle {
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 3rem;
		height: 2rem;
	}
	
	.typewriter {
		display: inline-block;
		overflow: hidden;
		border-right: 2px solid rgba(255, 255, 255, 0.7);
		white-space: nowrap;
		animation: typing 3s steps(30) 3s forwards, blink 1s infinite 3s;
		width: 0;
	}
	
	.splash-container.reveal .typewriter {
		animation-play-state: running;
	}
	
	@keyframes typing {
		from { width: 0; }
		to { width: 100%; }
	}
	
	@keyframes blink {
		50% { border-color: transparent; }
	}
	
	.loading-bar {
		width: 300px;
		height: 4px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		margin: 0 auto 2rem auto;
		overflow: hidden;
		position: relative;
	}
	
	.loading-progress {
		height: 100%;
		background: linear-gradient(90deg, #8A2BE2, #FF1493, #00BFFF);
		width: 0;
		border-radius: 2px;
		animation: loadingProgress 4s ease-out 6s forwards;
		position: relative;
	}
	
	.loading-progress::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
		animation: shimmer 1s ease-in-out infinite;
	}
	
	.splash-container.complete .loading-progress {
		animation-play-state: running;
	}
	
	@keyframes loadingProgress {
		0% { width: 0; }
		100% { width: 100%; }
	}
	
	@keyframes shimmer {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}
	
	.beta-button {
		background: linear-gradient(135deg, #8A2BE2, #FF1493);
		border: none;
		color: white;
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 50px;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 1px;
		transform: scale(0);
		animation: buttonAppear 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
		box-shadow: 
			0 10px 30px rgba(138, 43, 226, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}
	
	.beta-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.6s;
	}
	
	.beta-button:hover {
		transform: scale(1.05);
		box-shadow: 
			0 15px 40px rgba(138, 43, 226, 0.6),
			inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}
	
	.beta-button:hover::before {
		left: 100%;
	}
	
	.beta-button:active {
		transform: scale(0.98);
	}
	
	@keyframes buttonAppear {
		0% {
			transform: scale(0) rotate(180deg);
			opacity: 0;
		}
		50% {
			transform: scale(1.1) rotate(10deg);
			opacity: 0.8;
		}
		100% {
			transform: scale(1) rotate(0deg);
			opacity: 1;
		}
	}
	
	.cosmic-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		pointer-events: none;
	}
	
	.star {
		position: absolute;
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.5rem;
		animation: twinkle 3s ease-in-out infinite;
	}
	
	.star-1 { top: 15%; left: 20%; animation-delay: 0s; }
	.star-2 { top: 25%; right: 25%; animation-delay: 1s; }
	.star-3 { bottom: 30%; left: 15%; animation-delay: 2s; }
	.star-4 { bottom: 20%; right: 20%; animation-delay: 0.5s; }
	.star-5 { top: 40%; left: 80%; animation-delay: 1.5s; }
	
	@keyframes twinkle {
		0%, 100% { opacity: 0.3; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.2); }
	}
	
	@media (max-width: 768px) {
		.main-title {
			font-size: clamp(2.5rem, 8vw, 4rem);
			letter-spacing: 0.1em;
		}
		
		.subtitle {
			font-size: clamp(1rem, 2.5vw, 1.4rem);
		}
		
		.loading-bar {
			width: 250px;
		}
		
		.beta-button {
			padding: 0.8rem 2rem;
			font-size: 1rem;
		}
		
		.gradient-orb-1, .gradient-orb-2, .gradient-orb-3 {
			width: 200px;
			height: 200px;
		}
	}
</style>
