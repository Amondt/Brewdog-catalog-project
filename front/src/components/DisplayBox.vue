<template>
    <div>
        <v-container>
            <v-layout wrap justify-space-between v-if="displayBeers && displayBeers.length">
                <v-flex v-for="beer in displayBeers" :key="beer.name" mx-3 my-3 xs2>
                    <p>{{ beer.name }}</p>
                    <p>ABV : {{ beer.abv }}</p>
                    <p>IBU : {{ beer.ibu }}</p>
                    <p>EBC : {{ beer.ebc }}</p>
                </v-flex>
            </v-layout>
            <v-layout v-else>
                No matching beers...
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'displayBox',
    props: {
        displayBeers: {
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
