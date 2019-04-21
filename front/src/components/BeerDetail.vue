<template>
    <div>
        <v-card flat hover style="height:100%;" @click.stop="detailDisplay = true">
            <v-chip id="percent-alc-chip" disabled label color="primary" text-color="white">{{ beer.abv }} %</v-chip>
            <v-card-title class="title grey darken-2 grey--text text--lighten-2 text-xs-left" style="height:80px;overflow:hidden;">{{ beer.name }}</v-card-title>
            <img class="mt-5 mb-1 grey--text text--lighten-2" height="150" :src="beer.image_url ? beer.image_url : ''">
            <v-card-text class="grey--text text--lighten-2 subheading">{{ beer.tagline }}</v-card-text>
        </v-card>
        <v-dialog v-model="detailDisplay" max-width="500">
            <v-card>
                <v-card-title class="title grey darken-2 grey--text text--lighten-2 text-xs-center">{{ beer.name }}</v-card-title>

                <v-card-text class="grey--text text--lighten-2 subheading text-xs-left">{{ beer.tagline }}</v-card-text>

                <v-divider></v-divider>

                <v-layout mt-3>
                    <v-flex xs4 align-self-center>
                        <img height="150" :src="beer.image_url" :alt="beer.name + ' | ' + beer.image_url">
                    </v-flex>

                    <v-flex xs8 px-3>
                        <v-card-text text-xs-left class="grey--text text--lighten-2 body-1 text-xs-left">{{ beer.description }}</v-card-text>
                    </v-flex>
                </v-layout>

                <v-layout justify-space-between>
                    <v-flex>
                        <v-chip disabled class="grey--text text--lighten-2">ABV: {{ beer.abv }} %</v-chip>
                    </v-flex>

                    <v-flex>
                        <v-chip disabled class="grey--text text--lighten-2">IBU: {{ beer.ibu }}</v-chip>
                    </v-flex>

                    <v-flex>
                        <v-chip disabled class="grey--text text--lighten-2">EBC: {{ beer.ebc }}</v-chip>
                    </v-flex>
                </v-layout>

                <v-layout mt-3>
                    <v-flex xs6>
                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <template v-slot:header>
                                    <div class="grey--text text--lighten-2">malts</div>
                                </template>
                                <v-card flat>
                                    <v-card-text v-for="(malt, index) in malts" :key="index" class="grey--text text--lighten-2">
                                        {{ malt }}
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-flex>

                    <v-flex xs6>
                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <template v-slot:header>
                                    <div class="grey--text text--lighten-2">hops</div>
                                </template>
                                <v-card>
                                    <v-card-text v-for="(hop, index) in hops" :key="index" class="grey--text text--lighten-2">
                                        {{ hop }}
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-flex>
                </v-layout>

                <v-card-text class="grey--text text--lighten-2">yeast: {{ beer.ingredients.yeast }}</v-card-text>

                <v-card-text class="grey--text text--lighten-2">tips: {{ beer.brewers_tips }}</v-card-text>
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
