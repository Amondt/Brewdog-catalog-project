<template>
    <div id="app">
        <v-app id="inspire" :dark="darkTheme">

            <Drawer ref="drawer"/>
            
            <Toolbar @toggleDrawer="$refs.drawer.toggleDrawer()" @toggleTheme="darkTheme = !darkTheme" />

            <Views @submit="submitRange" @sort="sortBeers" @search="submitSearch" :loadedBeers="loadedBeers" :loading="loading" />
            
            <Vfooter :darkTheme="darkTheme" />
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
            darkTheme: true,
            errored: false,
            sortType: 'asc',
            selectorDatas: {
                beerIndic: 'name',
                min: '',
                max: ''
            },
            searchInput: '',
            beerAdded: false,
            dataBeers: [],
            displayBeers: [],
            loading: false,
            nextDisplay: 0,
            loadedBeers: []
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
                this.loadedBeers.sort((a, b) => a[this.selectorDatas.beerIndic] < b[this.selectorDatas.beerIndic] ? -1 : 1)
            } else if (sortType === 'desc') {
                this.loadedBeers.sort((a, b) => a[this.selectorDatas.beerIndic] > b[this.selectorDatas.beerIndic] ? -1 : 1)
            }
        },
        submitSearch(input) {
            this.searchInput = input.replace(/\s/g, '').toLowerCase()
            this.selectorDatas.beerIndic = 'name'
            this.displaySearch()
        },
        displaySearch() {
            console.log('search : ' + this.searchInput)
            this.beerAdded = false
            this.displayBeers = []
            this.loadedBeers = []
            this.nextDisplay = 0
            this.dataBeers.forEach(beer => {
                // By Name
                if (beer.name && beer.name.replace(/\s/g, '').toLowerCase().includes(this.searchInput)) {
                    this.displayBeers.push(beer)
                    this.beerAdded = true
                    console.log('by name added : ' + beer.name)
                }
                // By malt
                if (!this.beerAdded) {
                    beer.ingredients.malt.forEach(ingredient => {
                        if (ingredient.name && ingredient.name.replace(/\s/g, '').toLowerCase().includes(this.searchInput) && !this.beerAdded) {
                            this.displayBeers.push(beer)
                            this.beerAdded = true
                            console.log('by malt added : ' + beer.name)
                        }
                    })
                } 
                // By hops
                if (!this.beerAdded) {
                    beer.ingredients.hops.forEach(ingredient => {
                        if (ingredient.name && ingredient.name.replace(/\s/g, '').toLowerCase().includes(this.searchInput) && !this.beerAdded) {
                            this.displayBeers.push(beer)
                            this.beerAdded = true
                            console.log('by hops added : ' + beer.name)
                        }
                    })
                } 
                // By yeast
                if (beer.ingredients.yeast && beer.ingredients.yeast.replace(/\s/g, '').toLowerCase().includes(this.searchInput) && !this.beerAdded) {
                    this.displayBeers.push(beer)
                    this.beerAdded = true
                    console.log('by yeast added : ' + beer.name)
                } 
                // By food matching
                if (!this.beerAdded) {
                    beer.food_pairing.forEach(meal => {
                        if (meal && meal.replace(/\s/g, '').toLowerCase().includes(this.searchInput) && !this.beerAdded) {
                            this.displayBeers.push(beer)
                            this.beerAdded = true
                            console.log('by food added : ' + beer.name)
                        }
                    })
                }
                this.beerAdded = false
            })
            this.loadMore()
        },
        displayRange() {
            this.displayBeers = []
            this.loadedBeers = []
            this.nextDisplay = 0
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
            this.loadMore()
        },
        loadMore() {
            this.loading = true
            setTimeout(e => {
                for (var i = 0; i < 20; i++) {
                    if (this.displayBeers[this.nextDisplay]) {
                        this.loadedBeers.push(this.displayBeers[this.nextDisplay])
                        this.nextDisplay++
                    }
                }
                this.loading = false
            }, 200)
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
        window.addEventListener('scroll', e => {
            if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                this.loadMore()
            }
        })
        this.loadMore()
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  width: 100vw;
  overflow-x: hidden;
}

#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body::-webkit-scrollbar {
    width: 0.7em;
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
