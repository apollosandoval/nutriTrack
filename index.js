let instantURL = 'https://trackapi.nutritionix.com/v2/search/instant';
let nutrientURL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
// retrieve important elements
let restaurantSearch = document.querySelector('#restaurant_search');
let submit = document.querySelector('#submit-foods');
let contentWrapper = document.querySelector('.wrapper');


// event handlers
let instantSearch = function (e) {
    fetch(instantURL+`?query=${e.target.value}`, {
        headers: {
            'x-app-id': `${API_ID}`,
            'x-app-key': `${API_KEY}`,
            'x-remote-user-id': '0'
        }
    })
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.statusText}`)
        })
        .then(jsonObj => {
            // console.log(`${jsonObj.branded[0].food_name}`)
            autocompleteInput.updateData({
                [`${jsonObj.branded[0].food_name}`]: null,
                [`${jsonObj.branded[1].food_name}`]: null,
                [`${jsonObj.branded[2].food_name}`]: null,
                [`${jsonObj.common[0].food_name}`]: null,
                [`${jsonObj.common[1].food_name}`]: null,
                [`${jsonObj.common[2].food_name}`]: null
            });
        })
        .catch((error) => {
            console.log(error);
        })
};  // end of instantSearch()

let publishCard = function (e) {
    e.preventDefault();
    // create meal object for use in card
    let meal = {};
    // gather inputs from form
    if ($('#eatOut').hasClass('active')) {
        // console.log($('#eatOutMealName option:checked').val())
        meal['meal_name'] = $('#eatOutMealName option:checked').val();
    } else if ($('#dineIn').hasClass('active')) {
        meal['meal_name'] = $('#dineInMealName option:checked').val();
    }
    // add data from response object
    meal['food_items'] = tempMealData[0];
    
    // to retrieve the data object use: tempMealData[0]
    let mealCard = document.createElement('div');
    
    mealCard.setAttribute('class', 'row');
    mealCard.innerHTML = `<div class="col s8 offset-s2">
                        <div class="card horizontal">
                            <!-- Meal Card Logo -->
                            <div class="card-image activator">
                                <!-- Insert Image or Restaurant Logo -->
                                <i class="large material-icons activator">local_dining</i>
                            </div>
                            <!-- Meal Card Content -->
                            <div class="card-stacked">
                                <!-- Meal Name -->
                                <div class="card-content activator">
                                    <div class="card-title center-align activator">Meal 1</div>
                                </div>
                                <!-- Meal Data -->
                                <div class="card-content activator">
                                    <div class="col s6 center-align activator">
                                        <h4 class="card-title activator">kCal</h4>
                                    </div>
                                    <div class="col s6 activator">
                                        <div class="row activator">
                                            <div class="col s12 activator">
                                                <h4 class="card-title center-align grey activator">G Protein</h4>
                                            </div>
                                        </div>
                                        <div class="row activator">
                                            <div class="col s12 activator">
                                                <h4 class="card-title center-align activator">G Carbs</h4>
                                            </div>
                                        </div>
                                        <div class="row activator">
                                            <div class="col s12 activator">
                                                <h4 class="card-title center-align grey activator">G Fat</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Reveal Nutrition Label -->
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Nutritional Information<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>`;
    $(mealCard).insertBefore('#modal-start');
};  // end of publishCard()

let isThisOn = function (e) {
    console.log(e);
}

// event listeners
restaurantSearch.addEventListener('input', instantSearch);
submit.addEventListener('click', publishCard);
