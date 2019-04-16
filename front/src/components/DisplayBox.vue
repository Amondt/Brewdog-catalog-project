<template>
    <div>
        <v-container>
            <v-layout wrap justify-space-around v-if="displayBeers && displayBeers.length">
                <v-flex v-for="beer in displayBeers" :key="beer.name" mx-1 my-3 xs3>
                    <v-card flat hover style="height:100%;">
                        <v-card-title>{{ beer.name }}</v-card-title>
                        <v-card-text>{{ beer.abv }} %</v-card-text>
                        <img :src="beer.image_url ? beer.image_url : ''">
                        <v-card-text>{{ beer.tagline }}</v-card-text>
                    </v-card>
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
img {
    height: 150px;
}
</style>
