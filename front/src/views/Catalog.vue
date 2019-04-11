<template>
    <div>
        <SearchArea @submit="submit"/>
        <DisplayBox :dataBeers="dataBeers" />
    </div>
</template>

<script>
import SearchArea from '../components/SearchArea'
import DisplayBox from '../components/DisplayBox'

import { getDataBeers } from '../api/punkApi/punkApiMethods.js'

export default {
    name: 'catalog',
    components: {
        SearchArea,
        DisplayBox
    },
    data () {
        return {
            url: '',
            errored: false,
            loading: true,
            sortType: 'asc',
            page: 1,
            sort: '',
            min: '',
            max: '',
            dataBeers: []
        }
    },
    methods: {
        submit(selectorName, selectorRange) {
            this.sort = selectorName
            this.min = selectorRange[0]
            this.max = selectorRange[1]
            this.getData()
        },
        getData() {
            if (this.sort === '') {
                this.url = `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=20`
            } else {
                this.url = `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=20&${this.sort}_gt=${this.min}`
            }
            this.axios
            .get(this.url)
            .then(response => { 
                this.dataBeers = response.data
                let sortType = this.sort
                for (let i = 0; i < this.dataBeers.length; i++) {
                    if (this.dataBeers[i]) {
                        if (this.dataBeers[i].sortType > this.max) {
                            this.dataBeers.splice(i, 1)
                        }
                    }
                }
                this.sortBeers(this.sortType, this.sort)
            })
            .catch(error => { 
                console.log(error)
                this.errored = true
            })
            .finally(() => { this.loading = false })
        },
        sortBeers(type, prop) {
            if (type === 'asc') {
                this.dataBeers.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
            } else if (type === 'desc') {
                this.dataBeers.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>
