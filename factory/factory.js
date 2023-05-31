
function busTravel(){
    let costs = {
        'Khayelitsha': 40, 
        'Dunoon': 25, 
        'MitchellsPlain': 30, 
    };

    let noOf1Trips = 0;

    let noOf2Trips = 0;

    let cost = 0;

    let returnCost =0;

    let globalVariable1;
//The first function should take in a parameter and return nothing
function enterPoints(points){
    if(points && !isNaN(points)){
    points
    }
    else if(!points || isNaN(points)){
        points = 0
    }

    globalVariable1 = points
}

function getEnteredPoints(){
    //globalVariable1 = points
    return globalVariable1
}
//The second function should check which destination is lelected
//Then check what is the travel time is it peak or not
//if it is a return trip calculate accordingly
//if it is peak add a 25% increase on the normal price else do not
function calculateTrips(radio, town){
    if(radio == 'Peak'){
    for (var key in costs) {
        if(key == "Khayelitsha" && town == "Khayelitsha"){
            costs[key] += (25/100)*40
            cost = costs[key]
           noOf1Trips = globalVariable1 / costs[key]
           noOf2Trips = noOf1Trips / 2
         }
         else if(key == "Dunoon" && town == "Dunoon"){
            costs[key] += (25/100)*25
            cost = costs[key]
           noOf1Trips = globalVariable1 / costs[key]
           noOf2Trips = noOf1Trips / 2
         }
         else if(key == "MitchellsPlain" && town == "MitchellsPlain"){
            costs[key] += (25/100)*30
            cost = costs[key]
           noOf1Trips = globalVariable1 / costs[key]
           noOf2Trips = noOf1Trips / 2
         }
    }   
    }

    else if(radio == 'Off-peak'){
        for (var keys in costs){
            if(keys == "Khayelitsha" && town == "Khayelitsha"){
                cost = costs[keys]
              noOf1Trips = globalVariable1 / costs[keys]
              noOf2Trips = noOf1Trips / 2
            }
            else if(keys == "Dunoon" && town == "Dunoon"){
               cost = costs[keys]
              noOf1Trips = globalVariable1 / costs[keys]
              noOf2Trips = noOf1Trips / 2
            }
            else if(keys == "MitchellsPlain" && town == "MitchellsPlain"){
                cost = costs[keys]
              noOf1Trips = globalVariable1 / costs[keys]
              noOf2Trips = noOf1Trips / 2
            }
        }
            
    }
}
//the third function should get the number of single tripscfrom the above function accordingly
function getNumberOfSingleTrips(){
        if(noOf1Trips > 1){
         noOf1Trips = Math.round(noOf1Trips)
        }
        else if(noOf1Trips< 1){
         noOf1Trips = 0
        }
    return noOf1Trips
}
//the fourth one should get the price per single trip
function getPricePerSingleTrip(){
    return "R"+cost
}
//the fifth one should get the number of return trips if it is a return trip
function getNumberOfReturnTrips(){
    if(noOf2Trips > 1){
     noOf2Trips = Math.round(noOf2Trips)
    }
    else if(noOf2Trips< 1){
     noOf2Trips = 0
    }
return noOf2Trips
}
//the sixth one should get the price per return trip if it is a return trip
function getPricePerReturnTrip(){
    returnCost = cost*(2)
    return "R"+returnCost
}

return {
    enterPoints,
    getEnteredPoints,
    calculateTrips,
    getNumberOfSingleTrips,
    getNumberOfReturnTrips,
    getPricePerSingleTrip,
    getPricePerReturnTrip
}

}