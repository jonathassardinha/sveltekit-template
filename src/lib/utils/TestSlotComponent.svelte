<script lang="ts" generics="C extends ComponentType">
	import type { ComponentProps, ComponentType } from 'svelte';

	export let slotText: string;
	export let Component: C;
	export let componentProps: ComponentProps<InstanceType<C>>;
</script>

<svelte:component this={Component} {...componentProps}>
	<p>{slotText}</p>
</svelte:component>
