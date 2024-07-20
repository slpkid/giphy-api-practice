const img = document.querySelector('img')
const newCatButton = document.getElementById('change-image')
const searchBox = document.getElementById('search-box')
const searchButton = document.getElementById('search-button')

function changeImage(query) {

    // append search query to the api lookup link
    const searchQuery = 'https://api.giphy.com/v1/gifs/translate?api_key=QafRQdO6R8uWFnWP8fvFbLLJtiOBQJnZ&s=' + query
    
    // call fetch
    fetch(searchQuery)
    // retrieve json
    .then(function(response) {
        return response.json()
    })
    // append image from json to the img element
    .then(function(response) {
        img.src = response.data.images.original.url
    })
    // Throw an error if we don't get an image back.
    .catch(function(response) {
        if (!response.status === 200) {
            throw new Error('Bad response received.')
        }
    })
}

function searchImage() {
    const searchTerms = searchBox.value

    changeImage(searchTerms)
}

function searchCatImage() {
    changeImage('cat')
}

// Attach event listeners
newCatButton.addEventListener('click',searchCatImage)
searchButton.addEventListener('click',searchImage)