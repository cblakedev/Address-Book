<template>
	<div class="container max-w-screen-xl mx-auto font-sans h-full">
		<div class="h-[10%] flex flex-col justify-center items-center">
			<h1 class="text-4xl font-bold">Address Book</h1>
		</div>
		<div class="flex flex-row pb-2 h-[90%]">
			<contactsListPage />
			<contactProfilePage />
		</div>
	</div>
</template>

<script>
import contactsListPage from '../src/components/contactsList/contactsListPage.vue';
import contactProfilePage from '../src/components/contactProfile/contactProfilePage.vue';

export default {
	name: 'app',
	components: {
		contactsListPage,
		contactProfilePage
	},
	data() {
		return {

		}
	}
}
</script>