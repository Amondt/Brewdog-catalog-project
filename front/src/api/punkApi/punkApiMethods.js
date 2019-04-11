export function getDataBeers(page, sort, param) {

    
    const req = new XMLHttpRequest()
    req.open('GET', `https://api.punkapi.com/v2/beers?page=${page}&per_page=5&${sort}=${param}`)
    req.send(null)
    if (req.status === 200) {
        console.log(req)
        return JSON.parse(req.response)
    } else {
        console.log('fail', req)
        return req.status
    }
}