
let rndNumber = Math.random().toString(36).substr(1,4);

let data = {
    email:              'dummy' + rndNumber + '@mailinator.com',
    bad_email:          "bad@mail",
    firstName:          "Juan",
    lastName:           "Camaney",
    password:           "123456",
    pbox:               "Somewhere underthe Rainbow 1234",
    city:               "Mobile",
    state:              "Alabama",
    zipCode:            "36602",
    country:            "United States",
    mobilePhone:        "219892828492",
    alias :             "My Home",
    registeredEmail:    'dummy.fiy@mailinator.com',
    nonExistingItem:    'Dressing',
    existingItem01:     'Blouse',
    existingItem02:     'Dress'
}

export {data}