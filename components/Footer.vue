<template>
	<footer>
		<nav>
			<ul>
				<li>
					<a href="/api">API</a>
				</li>
				<li>
					<a
						href="https://github.com/diogenesc/devo-deployar-reverso"
						target="_blank"
						rel="noopener noreferrer"
						>GitHub</a
					>
				</li>
			</ul>
		</nav>
	</footer>
</template>

<style lang="postcss" scoped>
ul {
	@apply flex gap-10 p-3;

	li {
		@apply text-red-200 text-base lg:text-lg;
	}
}
</style>
