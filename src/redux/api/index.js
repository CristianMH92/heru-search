export default function apiCall( method, url ) {
    return fetch(url, {
        method
    }).then( response => {
        return response.json()
    })
    .then(response => {
        return response.data
    })
    
}