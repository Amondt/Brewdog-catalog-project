<template>
    <div>
        <SearchArea @submit="emitSubmit" @sort="emitSort" @search="emitSearch" />
        <DisplayBox :loadedBeers="loadedBeers" :loading="loading" />
    </div>
</template>

<script>
import SearchArea from '../components/SearchArea'
import DisplayBox from '../components/DisplayBox'

export default {
    name: 'catalog',
    components: {
        SearchArea,
        DisplayBox
    },
    props: {
        loadedBeers: {
            type: Array
        },
        loading: { type: Boolean }
    },
    methods: {
        emitSubmit (selectorName, selectorRange) {
            this.$emit('submit', selectorName, selectorRange)
        },
        emitSort(sort) {
            this.$emit('sort', sort)
        },
        emitSearch(input) {
            this.$emit('search', input)
        }
    }
}
</script>

<style scoped>

</style>
