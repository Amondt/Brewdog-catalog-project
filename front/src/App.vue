<template>
    <div id="app">
        <v-app id="inspire" dark>

            <Drawer ref="drawer"/>
            
            <Toolbar @toggleDrawer="$refs.drawer.toggleDrawer()"/>

            <Views @submit="submitRange" @sort="sortBeers" @search="submitSearch" :displayBeers="displayBeers" />

            <Vfooter />
        </v-app>
    </div>
</template>

<script>
import Drawer from '@/menu/Drawer'
import Toolbar from '@/header/Toolbar'
import Views from '@/views/Views'
import Vfooter from '@/footer/Vfooter'

export default {
    name: 'app',
    components: {
        Drawer,
        Toolbar,
        Views,
        Vfooter
    },
    data () {
        return {
            errored: false,
            sortType: 'asc',
            selectorDatas: {
                beerIndic: '',
                min: '',
                max: ''
            },
            dataBeers: [],
            displayBeers: []
        }
    },
    methods: {
        submitRange(selectorName, selectorRange) {
            this.selectorDatas.beerIndic = selectorName
            this.selectorDatas.min = selectorRange[0]
            this.selectorDatas.max = selectorRange[1]
            this.displayRange()
        },
        sortBeers(sortType) {
            if (sortType === 'asc') {
                this.displayBeers.sort((a, b) => a[this.selectorDatas.beerIndic] < b[this.selectorDatas.beerIndic] ? -1 : 1)
            } else if (sortType === 'desc') {
                this.displayBeers.sort((a, b) => a[this.selectorDatas.beerIndic] > b[this.selectorDatas.beerIndic] ? -1 : 1)
            }
        },
        submitSearch(input) {
            console.log(input)
            this.displaySearch()
        },
        displaySearch() {
            console.log('search display')
        },
        displayRange() {
            this.displayBeers = []
            if (this.selectorDatas.beerIndic === 'abv') {
                this.dataBeers.forEach(beer => {
                    if (beer.abv >= this.selectorDatas.min && beer.abv <= this.selectorDatas.max) {
                        this.displayBeers.push(beer)
                    }
                })
            } else if (this.selectorDatas.beerIndic === 'ibu') {
                this.dataBeers.forEach(beer => {
                    if (beer.ibu >= this.selectorDatas.min && beer.ibu <= this.selectorDatas.max) {
                        this.displayBeers.push(beer)
                    }
                })
            } else if (this.selectorDatas.beerIndic === 'ebc') {
                this.dataBeers.forEach(beer => {
                    if (beer.ebc >= this.selectorDatas.min && beer.ebc <= this.selectorDatas.max) {
                        this.displayBeers.push(beer)
                    }
                })
            }
        },
        async getData() {
            let endReq = false
            let page = 1
            while (!endReq) {
                await this.axios
                .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=25`)
                .then(response => {
                    this.dataBeers.push(...response.data)
                    if (response.data.length == 0) { endReq = true }
                    page += 1
                })
                .catch(error => { 
                    console.log(error) 
                    this.errored = true
                    endReq = true
                })
            }
        }
    },
    mounted() {
        this.getData()
        this.displayBeers = this.dataBeers
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
