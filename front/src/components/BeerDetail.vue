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
                <v-card-title>{{ beer.name }}</v-card-title>

                <v-card-text>{{ beer.tagline }}</v-card-text>

                <v-layout>
                    <v-flex xs4>
                        <img height="150" :src="beer.image_url" :alt="beer.name + ' | ' + beer.image_url">
                    </v-flex>

                    <v-flex xs6>
                        <v-card-text>{{ beer.description }}</v-card-text>
                    </v-flex>
                </v-layout>

                <v-layout justify-space-between>
                    <v-flex>
                        <v-chip>ABV: {{ beer.abv }} %</v-chip>
                    </v-flex>

                    <v-flex>
                        <v-chip>IBU: {{ beer.ibu }}</v-chip>
                    </v-flex>

                    <v-flex>
                        <v-chip>EBC: {{ beer.ebc }}</v-chip>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex xs6>
                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <template v-slot:header>
                                    <div>malts</div>
                                </template>
                                <v-card>
                                    <v-card-text v-for="(malt, index) in beer.ingredients.malt" :key="index">
                                        {{ malt.name }}
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-flex>

                    <v-flex xs6>
                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <template v-slot:header>
                                    <div>hops</div>
                                </template>
                                <v-card>
                                    <v-card-text v-for="(hops, index) in beer.ingredients.hops" :key="index">
                                        {{ hops.name }}
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-flex>
                </v-layout>

                <v-card-text>yeast: {{ beer.ingredients.yeast }}</v-card-text>

                <v-card-text>tips: {{ beer.brewers_tips }}</v-card-text>
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
</style>
