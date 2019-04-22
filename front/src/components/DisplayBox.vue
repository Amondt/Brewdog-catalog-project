<template>
    <v-container>
        <v-layout wrap justify-space-around v-if="loadedBeers && loadedBeers.length">       
            <v-flex v-for="(beer, index) in loadedBeers" :key="index" mx-1 my-3 xs11 sm4 md3 lg2>
                <BeerDetail :beer="beer" style="height:100%;" />
            </v-flex>
        </v-layout>
        <v-layout v-else justify-center>
            No matching beers...
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
        }
    }
}
</script>

<style scoped>

</style>
