<template>
	<div class="container pt-[100px] md:pb-2 max-w-screen-md mx-auto font-sans h-full">
		<div class="flex flex-row absolute top-0 left-0 items-center w-full py-3 bg-white custom-bottom-shadow">
			<img class="width-[25px] h-[25px] pl-3" src="/genesys-logo.png" alt="Address Book Logo">
			<h1 class="text-3xl font-bold text-[#4158A6] px-3">Address Book</h1>
		</div>
		<div class="flex flex-row justify-center h-full shadow-lg border-grey-100 md:border md:mx-4 rounded-md">
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