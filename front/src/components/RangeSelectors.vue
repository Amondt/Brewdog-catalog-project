<template>
    <div>
        <v-layout row v-for="selector in rangeSelectors" :key="selector.name">
            <v-flex v-if="$route.params.sort === selector.name" class="mx-3 mt-1">
                <v-layout row justify-space-between>
                    <v-flex shrink>
                        <v-btn flat class='mt-3' @click="emitSubmit(selector.name, selector.range)"><v-icon left>search</v-icon>Search</v-btn>
                    </v-flex>
                    <v-flex shrink>
                        <v-btn flat class="mt-3" @click="toggleRangeSelector">
                            <v-icon v-if="!ranges">expand_more</v-icon>
                            <v-icon v-else>expand_less</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex shrink>
                        <v-switch class="mx-4" v-model="extreme" label="extreme" @change="updateRange"></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row wrap justify-space-between v-if="ranges">
                    <v-flex shrink style="width:100px" class="ml-3 order-xs1 order-sm1 order-md1 order-lg1">
                        <v-text-field disabled v-model="selector.range[0]" class="mt-0" :prefix="selector.prefix" hide-details single-line type="number"></v-text-field>
                    </v-flex>
                    <v-flex class="px-3 order-xs3 order-sm3 order-md3 order-lg2">
                        <v-range-slider thumb-label v-model="selector.range" :max="extreme ? selector.maxX : selector.max" :min="extreme ? selector.minX : selector.min"></v-range-slider>
                    </v-flex>
                    <v-flex shrink style="width:100px" class="mr-3 order-xs2 order-sm2 order-md2 order-lg3">
                        <v-text-field disabled v-model="selector.range[1]" class="mt-0" :prefix="selector.prefix" hide-details single-line type="number"></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap justify-center v-if="$route.params.sort === 'ebc' && !extreme && ranges">
                    <v-btn class="mx-1" v-for="color in colorsEbc" :key="color.color" depressed :color="color.color" small fab @click="selector.range = color.range"></v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'rangeSelectors',
    data () {
        return {
            rangeSelectors: [
                { name: 'abv', range: [0, 20], min: 0, max: 20, minX: 20, maxX: 60, prefix: '%' },
                { name: 'ibu', range: [0, 100], min: 0, max: 100, minX: 100, maxX: 1200, prefix: 'IBU' },
                { name: 'ebc', range: [0, 100], min: 0, max: 100, minX: 100, maxX: 600, prefix: 'EBC' }
            ],
            colorsEbc: [
                { color: '#FFE699', range: [0, 4]},
                { color: '#FED878', range: [4, 6]},
                { color: '#FDCA59', range: [6, 8]},
                { color: '#FBBE41', range: [8, 12]},
                { color: '#F7A735', range: [12, 18]},
                { color: '#E48630', range: [18, 24]},
                { color: '#CF6A2A', range: [24, 30]},
                { color: '#BB5225', range: [30, 36]},
                { color: '#A63F20', range: [36, 40]},
                { color: '#9B341D', range: [40, 48]},
                { color: '#822316', range: [48, 60]},
                { color: '#5E160D', range: [60, 80]},
                { color: '#36090A', range: [80, 100]}
            ],
            extreme: false,
            ranges: true
        }
    },
    methods: {
        resetRangesChoices: function() {
            this.extreme = false
            this.rangeSelectors.forEach(item => {
                item.range = [item.min, item.max]
            })
            this.ranges = true

        },
        updateRange: function (e) {
            console.log(e)
            if (this.$route.params.sort === 'abv') {
                e ? this.rangeSelectors[0].range = [this.rangeSelectors[0].minX, this.rangeSelectors[0].maxX] : this.rangeSelectors[0].range = [this.rangeSelectors[0].min, this.rangeSelectors[0].max]
            } else if (this.$route.params.sort === 'ibu') {
                e ? this.rangeSelectors[1].range = [this.rangeSelectors[1].minX, this.rangeSelectors[1].maxX] : this.rangeSelectors[1].range = [this.rangeSelectors[1].min, this.rangeSelectors[1].max]
            } else if (this.$route.params.sort === 'ebc') {
                e ? this.rangeSelectors[2].range = [this.rangeSelectors[2].minX, this.rangeSelectors[2].maxX] : this.rangeSelectors[2].range = [this.rangeSelectors[2].min, this.rangeSelectors[2].max]
            }
        },
        toggleRangeSelector: function() {
            this.ranges = !this.ranges
        },
        emitSubmit(selectorName, selectorRange) {
            this.$emit('submit', selectorName, selectorRange)
        }
    }
}
</script>

<style scoped>

</style>
