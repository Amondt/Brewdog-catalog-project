<template>
    <v-container>
        <v-tabs centered mandatory color="transparent" wrap>
            <v-tab v-for="item in menu" :key="item.title" router :to="item.path" @click="$refs.rangeSelectors ? $refs.rangeSelectors.resetRangesChoices() : null">
                    {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-layout class="mt-3" row wrap>
            <v-flex xs2>
                <v-menu offset-y class="mt-3">
                    <v-btn flat slot="activator">
                        <span>Sort</span>
                        <v-icon right>{{ $route.params.sort === 'all' || !$route.params.sort ? 'sort_by_alpha' : 'import_export' }}</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in sortMenu" :key="item.title" @click="emitSort(item.title)">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-flex>

            <v-flex v-if="$route.params.sort !== 'all'" xs12 md8 class="order-xs3">
                <RangeSelectors ref="rangeSelectors" @submit="emitSubmit"/>
            </v-flex>

            <v-flex :class="[ $route.params.sort === 'all' || !$route.params.sort ? 'xs12 sm8 mx-3 mt-1' : 'xs4 sm2 order-md3' ]" >
                <v-form @submit.prevent="emitSearch(searchInput)">
                    <v-text-field prepend-icon="search" label="Search" v-model="searchInput" @click="$router.push('/catalog/all')"></v-text-field>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import RangeSelectors from './RangeSelectors'

export default {
    name: 'searchArea',
    components: {
        RangeSelectors
    },
    data () {
        return {
            menu: [
                { title: 'all', path: '/catalog/all'},
                { title: 'by alcohol level', path: '/catalog/abv'},
                { title: 'by bitterness', path: '/catalog/ibu'},
                { title: 'by color', path: '/catalog/ebc'}
            ],
            sortMenu: [
                { title: 'asc' },
                { title: 'desc' }
            ],
            searchInput: '',
        }
    },
    methods: {
        emitSubmit(selectorName, selectorRange) {
            this.$emit('submit', selectorName, selectorRange)
        },
        emitSort(sort) {
            this.$emit('sort', sort)
        },
        emitSearch(input) {
            this.$emit('search', input)
            this.searchInput = ''
        }
    }
}
</script>

<style scoped>

</style>
