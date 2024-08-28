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
            isMobile: false,
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

                    sections[firstLetter].push({ id: contact.id, name: contact.name });
                });

                const sortedSections = Object.keys(sections)
                    .sort((a, b) => this.sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a))
                    .reduce((sortedSections, key) => {
                        sortedSections[key] = sections[key].sort((a, b) => this.sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
                        return sortedSections;
                    }, {});

                return sortedSections;
            }

            return [];
        }
    },
    watch: {
        searchText(newSearchText) {
            clearTimeout(this.searchTimeout);

            this.searchTimeout = setTimeout(() => {
                this.getAllPeople(newSearchText);
            }, 500);
        }
    },
    methods: {
        getContactProfileOnClick(id) {
            contactListPageEndpoints.getAllPeople(`http://localhost:8080/api/people/profile?id=${id}`)
                .then((data) => {
                    this.$store.commit('updateSelectedContact', data);

                    if (this.isMobile) {
                        this.$store.commit('toggleProfilePageOnClick');
                    }
                });        
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
        },
    },
    created() {
        this.getAllPeople();
    },
    mounted() {
        this.checkScreenSize();
        
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    }
}
</script>