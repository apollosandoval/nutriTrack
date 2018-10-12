let tempMealData = [{}];

let postFoods = function (e) {
    // console.log(e);
    fetch(nutrientURL, {
        method: "POST",
        headers: {
            'x-app-id': `${API_ID}`,
            'x-app-key': `${API_KEY}`,
            'x-remote-user-id': '0',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": `${e}`
        })
    })
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${error.statusText}`);
        })
        .then( data => {
            console.log(data);
            tempMealData[0] = data['foods'][0];
            // console.log(tempMealData);
        })
        .catch( error => {
            console.log(error);
        })
};  // end of postFoods()