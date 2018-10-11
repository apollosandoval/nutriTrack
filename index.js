let instantURL = 'https://trackapi.nutritionix.com/v2/search/instant';
let nutrientURL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

let restaurantSearch = document.querySelector('#restaurant_search');


// event handlers
let instantSearch = function (e) {
    fetch(instantURL+`?query=${e.target.value}`, {
        headers: {
            'x-app-id': `${API_ID}`,
            'x-app-key': `${API_KEY}`,
            'x-remote-user-id': '0'
        }
    })
        .then( (response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.statusText}`)
        })
        .then( jsonObj => {
            console.log(jsonObj);
        })
        .catch ( (error) => {
            console.log(error);
        })
};

let isThisOn = function (e) {
    console.log(e.target.value);
}

// event listeners
restaurantSearch.addEventListener('input', instantSearch);