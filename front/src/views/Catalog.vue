<template>
    <div>
        <SearchArea @submit="emitSubmit" @sort="emitSort" />
        <DisplayBox :displayBeers="displayBeers" />
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
        displayBeers: {
            type: Array
        }
    },
    methods: {
        emitSubmit (selectorName, selectorRange) {
            this.$emit('submit', selectorName, selectorRange)
        },
        emitSort(sort) {
            this.$emit('sort', sort)
        }
    }
}
</script>

<style scoped>

</style>
