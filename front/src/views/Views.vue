<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <v-flex>
                    <router-view key="routerView" @submit="emitSubmit" @sort="emitSort" :displayBeers="displayBeers" />
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'views',
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

<style>

</style>
