let instantURL = 'https://trackapi.nutritionix.com/v2/search/instant';
let nutrientURL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

let restaurantSearch = document.querySelector('#restaurant_search');


// event handlers
let instantSearch = function (e) {
    console.log('running search')
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
            console.log(`${jsonObj.branded[0].food_name}`)
            autocompleteInput.updateData({
                [`${jsonObj.branded[0].food_name}`]: null,
                [`${jsonObj.branded[1].food_name}`]: null,
                [`${jsonObj.branded[2].food_name}`]: null,
                [`${jsonObj.common[0].food_name}`]: null,
                [`${jsonObj.common[1].food_name}`]: null,
                [`${jsonObj.common[2].food_name}`]: null
            });
        })
        .catch ( (error) => {
            console.log(error);
        })
};

function values(obj) {
    for (let key in obj) {
        return obj[key];
    }
}

let isThisOn = function (e) {
    console.log(e.target.value);
}

// event listeners
restaurantSearch.addEventListener('input', instantSearch);