<template src="./mobileContactProfilePage.html"></template>

<script>
    export default {
        name: 'mobile-contact-profile-page',
        data() {
            return {}
        },
        methods: {
            toggleProfilePageOnClick() {
                this.$store.commit('toggleProfilePageOnClick');
            }
        },
    }
</script>