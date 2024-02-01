<script lang="ts">
	import { ButtonClasses, type ButtonProps } from './Button.utils';

	type $$Props = ButtonProps;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';

	export { className as class };
</script>

<button
	class={ButtonClasses({ variant, size, className })}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</button>
