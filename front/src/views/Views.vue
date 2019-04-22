<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <v-flex>
                    <router-view key="routerView" @submit="emitSubmit" @sort="emitSort" @search="emitSearch" :loadedBeers="loadedBeers" :loading="loading" />
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'views',
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

<style>

</style>
