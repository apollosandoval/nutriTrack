let mealData = {
    '2018-10-11': {
        'breakfast': [{}],
        'lunch': [{},{},{}],
        'snack': [{},{}],
        'dinner': [{}],
        'dessert': [{}],
    },
    '2018-10-10': [
        { 'meal_title': 'snack' , 'contents': [{},{}],
        'lunch': {},
        'snack': {},
        },
        {'meal_title': 'snack', 'contents': [{}],
        'dinner': {}
        }
    ]
};

let mealArray = [
    {
        'date': '2018-10-11',
        [`${title}`]: {respObj}
    },
    {
        'date': '2018-10-11',
        [`${title}`]: { respObj }
    }
]


let whatever = {
    '2018-10-11': [
        {breakfast},
        {snack},
        {snack},
    ]
}


console.log(mealData['2018-10-10'][])