<template>
    <div>
        <v-card flat hover style="height:100%;" @click.stop="detailDisplay = true">
            <v-chip id="percent-alc-chip" disabled label color="primary" text-color="white">{{ beer.abv }} %</v-chip>
            <v-card-title class="title grey darken-2 grey--text text--lighten-2 text-xs-left" style="height:80px;overflow:hidden;">{{ beer.name }}</v-card-title>
            <img class="mt-5 mb-1 grey--text text--lighten-2" height="150" :src="beer.image_url ? beer.image_url : 'https://images.punkapi.com/v2/198.png'">
            <v-card-text class="grey--text text--lighten-2 subheading">{{ beer.tagline }}</v-card-text>
        </v-card>
        <v-dialog v-model="detailDisplay" max-width="500">
            <v-card>
                <v-layout>
                    <v-flex>
                        <v-card-title class="title grey darken-2 grey--text text--lighten-2 text-xs-center"><span>{{ beer.name }}</span></v-card-title>
                    </v-flex>

                    <v-flex shrink class="grey darken-2">
                        <v-menu open-on-hover bottom offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn flat v-on='on'>
                                    Food Pairing
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-tile v-for="food in beer.food_pairing" :key="food">
                                    {{ food }}
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-flex>
                </v-layout>

                <v-card-text class="grey--text text--lighten-2 subheading text-xs-left">{{ beer.tagline }}</v-card-text>

                <v-divider></v-divider>

                <v-layout my-3>
                    <v-flex xs4 align-self-center>
                        <img height="150" :src="beer.image_url ? beer.image_url : 'https://images.punkapi.com/v2/198.png'" :alt="beer.name + ' | ' + beer.image_url">
                    </v-flex>

                    <v-flex xs8 px-3>
                        <v-card-text text-xs-left class="grey--text text--lighten-2 body-1 text-xs-left">{{ beer.description }}</v-card-text>
                    </v-flex>
                </v-layout>

                <v-divider></v-divider>

                <v-layout justify-center mt-3>
                    <v-flex mx-1 shrink>
                        <v-chip label disabled class="grey--text text--lighten-2">ABV: {{ beer.abv }}%</v-chip>
                    </v-flex>

                    <v-flex mx-1 shrink>
                        <v-chip label disabled class="grey--text text--lighten-2">IBU: {{ beer.ibu }}</v-chip>
                    </v-flex>

                    <v-flex mx-1 shrink>
                        <v-chip label disabled class="grey--text text--lighten-2">EBC: {{ beer.ebc }}</v-chip>
                    </v-flex>
                </v-layout>

                <v-layout mt-3 justify-center>
                    <v-flex shrink mx-3>
                        <v-menu open-on-hover bottom offset-y transition="slide-y-transition" full-width>
                            <template v-slot:activator="{ on }">
                                <v-btn flat v-on='on'>
                                    malts
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-tile v-for="(malt, index) in malts" :key="index">
                                    {{ malt }}
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-flex>

                    <v-flex shrink mx-3>
                        <v-menu open-on-hover bottom offset-y transition="slide-y-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn flat v-on='on'>
                                    hops
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-tile v-for="(hop, index) in hops" :key="index">
                                    {{ hop }}
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-flex>

                    <v-flex shrink mx-3>
                        <v-menu open-on-hover bottom offset-y transition="slide-y-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn flat v-on='on'>
                                    yeast
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-tile>
                                    {{ beer.ingredients.yeast }}
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-flex>
                </v-layout>

                <v-layout mt-2>
                    <v-flex px-3>
                        <v-card-text class="grey--text text--lighten-2">
                            <div>
                                <p class="text-xs-center subheading">Brewers tip</p>
                                <p class="text-xs-left body-1">{{ beer.brewers_tips }}</p>
                            </div>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'beerDetail',
    props: {
        beer: {
            type: Object
        }
    },
    data() {
        return {
            detailDisplay: false
        }
    },
    computed: {
        hops: function() {
            let hops = []
            this.beer.ingredients.hops.forEach(hop => {
                if (!hops.includes(hop.name)) {
                    hops.push(hop.name)
                }
            })
            return hops
        },
        malts: function() {
            let malts = []
            this.beer.ingredients.malt.forEach(malt => {
                if (!malts.includes(malt.name)) {
                    malts.push(malt.name)
                }
            })
            return malts
        }
    }
}
</script>

<style>
#percent-alc-chip {
    position: absolute;
    z-index: 1;
    top: 65px;
    right: 2px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #424242;
}

::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
