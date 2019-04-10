export function getDataTmdbMov(page, sort, param) {
    const req = new XMLHttpRequest()
    req.open('GET', `https://api.punkapi.com/v2/beers?page=${page}&per_page=20&${sort}=${param}`)
    req.send(null)
    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return req.status
    }
}