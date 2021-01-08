<main>
	<h1>Soundboard</h1>

  <slot />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--darkest-colour);
    color: #fff;

    --darkest-colour: #181a1b;
    --dark-colour: #21292c;
    --theme-colour: #ff3e00;
	}

	main {
		text-align: center;
		padding: 1em;
	}

	h1 {
		color: var(--theme-colour);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: auto;
	}

</style>