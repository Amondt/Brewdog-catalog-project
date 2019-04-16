<template>
    <div>
        <v-container>
            <v-layout wrap justify-space-around v-if="displayBeers && displayBeers.length">
                <v-flex v-for="beer in displayBeers" :key="beer.name" mx-1 my-3 xs11 sm4 md3 lg2>
                    <v-card flat hover style="height:100%;">
                        <v-chip id="percent-alc-chip" disabled label color="primary" text-color="white">{{ beer.abv }} %</v-chip>
                        <v-card-title class="title grey darken-2 grey--text text--lighten-2 text-xs-left" style="height:80px;overflow:hidden;">{{ beer.name }}</v-card-title>
                        <img class="mt-5 mb-1 grey--text text--lighten-2" height="150" :src="beer.image_url ? beer.image_url : ''">
                        <v-card-text class="grey--text text--lighten-2 subheading">{{ beer.tagline }}</v-card-text>
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
#percent-alc-chip {
    position: absolute;
    z-index: 1;
    top: 65px;
    right: 2px;
}
</style>
