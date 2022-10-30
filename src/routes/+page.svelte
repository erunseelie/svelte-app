<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { TabGroup, Tab } from '@brainandbones/skeleton';
	import { LightSwitch } from '@brainandbones/skeleton';
	import { AppBar } from '@brainandbones/skeleton';
	import { Drawer } from '@brainandbones/skeleton';

	const storeTab: Writable<string> = writable('a');
	const storeDrawer: Writable<boolean> = writable(false);
	const drawerOpen: any = () => {
		storeDrawer.set(true);
	};
</script>

<div>
	<Drawer open={storeDrawer} position="left">(contents)</Drawer>
	<AppBar>
		<svelte:fragment slot="lead">
			<button on:click={drawerOpen}>Open</button>
		</svelte:fragment>
		(center)
		<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
	</AppBar>

	<TabGroup selected={storeTab}>
		<Tab value="a">LabelA</Tab>
		<Tab value="b">LabelB</Tab>
	</TabGroup>

	{#if $storeTab === 'a'}Content A{/if}
	{#if $storeTab === 'b'}Content B{/if}
</div>
