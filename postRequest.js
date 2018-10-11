let postFoods = function (e) {
    e.preventDefault();
    // console.log(restaurantSearch.value);
    fetch(nutrientURL, {
        method: "POST",
        headers: {
            'x-app-id': `${API_ID}`,
            'x-app-key': `${API_KEY}`,
            'x-remote-user-id': '0',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": "banana"
        })
    })
};  // end of postFoods()