<template src="./contactsListPage.html"></template>

<script>
import contactListPageEndpoints from './contactListPageEndpoints';

export default {
    name: 'contacts-list-page',
    data() {
        return {
            searchText: '',
            sortDirection: 'asc',
            people: [],
            searchTimeout: null,
            isMobile: false
        }
    },
    computed: {
        groupedContacts() {
            let sections = {};

            if (this.people && !this.people.message) {
                this.people.forEach((contact) => {
                    let firstLetter = contact.name.charAt(0).toUpperCase();

                    if (!sections[firstLetter]) {
                        sections[firstLetter] = [];
                    }

                    // Push an object with both id and name
                    sections[firstLetter].push({ id: contact.id, name: contact.name });
                });

                // Sort the sections alphabetically and adjust sorting order
                const sortedSections = Object.keys(sections)
                    .sort((a, b) => this.sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a))
                    .reduce((sortedSections, key) => {
                        // Sort each section based on name property of the objects
                        sortedSections[key] = sections[key].sort((a, b) => this.sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
                        return sortedSections;
                    }, {});

                return sortedSections;
            }

            return []
        }
    },
    watch: {
        searchText(newSearchText) {
            // Clear the previous timeout if there is one
            clearTimeout(this.searchTimeout);

            // Set a new timeout to delay the search
            this.searchTimeout = setTimeout(() => {
                this.getAllPeople(newSearchText);
            }, 500); // 500ms debounce
        }
    },
    methods: {
        getContactProfileOnClick(id) {
            contactListPageEndpoints.getAllPeople(`http://localhost:8080/api/people/profile?id=${id}`)
                .then((data) => {
                    this.$store.commit('updateSelectedContact', data);
                });
        },
        mobileGetContactProfileOnClick(id) {
            console.log('this is a mobile click');
        },
        getAllPeople() {
            contactListPageEndpoints.getAllPeople(`http://localhost:8080/api/people?name=${this.searchText}`)
                .then((data) => {
                    this.people = data;
                });
        },
        toggleSortDirectionOnClick() {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        },
        checkScreenSize() {
            this.isMobile = window.innerWidth < 768;
        }
    },
    created() {
        this.getAllPeople();
    },
    mounted() {
        // Check the initial screen size when the component is mounted
        this.checkScreenSize();
        // Add an event listener to update isMobile on window resize
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        // Remove the event listener to prevent memory leaks
        window.removeEventListener('resize', this.checkScreenSize);
    }
}
</script>