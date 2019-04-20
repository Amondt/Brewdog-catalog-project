<template>
    <div>
        <v-container>
            <v-layout wrap justify-space-around v-if="displayBeers && displayBeers.length">
                <v-flex v-for="beer in displayBeers" :key="beer.name" mx-1 my-3 xs11 sm4 md3 lg2>
                    <BeerDetail :beer="beer" style="height:100%;" />
                </v-flex>
            </v-layout>
            <v-layout v-else justify-center>
                No matching beers...
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import BeerDetail from './BeerDetail'

export default {
    name: 'displayBox',
    components: {
        BeerDetail
    },
    props: {
        displayBeers: {
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
