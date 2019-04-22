<template>
    <v-container mb-4>
        <v-layout wrap justify-space-around v-if="loadedBeers && loadedBeers.length">       
            <v-flex v-for="(beer, index) in loadedBeers" :key="index" mx-1 my-3 xs11 sm4 md3 lg2>
                <BeerDetail :beer="beer" style="height:100%;" />
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loadedBeers && !loadedBeers.length" justify-center>
            No matching beers...
        </v-layout>
        <v-layout v-if="loading" justify-center mt-3>
            Loading more beers...
        </v-layout>
    </v-container>
</template>

<script>
import BeerDetail from './BeerDetail'

export default {
    name: 'displayBox',
    components: {
        BeerDetail
    },
    props: {
        loadedBeers: {
            type: Array
        },
        loading: { type: Boolean }
    }
}
</script>

<style scoped>

</style>
