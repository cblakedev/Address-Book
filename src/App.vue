<template>
  <div class="flex flex-row font-sans">
    <contactsListPage />
    <contactProfilePage />
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