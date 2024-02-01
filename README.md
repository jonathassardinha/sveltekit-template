# SvelteKit Template

This is a base Sveltekit Template with the following features already baked in:

- Eslint
- Prettier
- Typescript
- Tailwindcss
- Component styles with tailwind-variants
- Integration tests with Playwright
- Unit tests with vitest

## Developing

This project is setup with `pnpm`, so make sure that is installed first. Then, install all dependencies with

```bash
pnpm install
```

To run the project:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
