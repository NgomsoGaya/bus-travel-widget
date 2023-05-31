
function busTravel(){
    let cost = 0;
    let globalVariable1;
//The first function should take in a parameter and return nothing
function enterPoints(points){
    if(points){
    points
    }
    else if(!points){
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
function calculateTrips(location){
    if(peak){
        if(location == "Khayelitsha"){
           //cost = 40 += (25/100)*40
        }
        else if(location == "Dunoon"){
           //cost = 40 += (25/100)*25
        }
        else if(location == "M/Plain"){
           //cost = 40 += (25/100)*30
        }
    }
    else if(off-peak){
            if(location == "Khayelitsha"){
               cost = 40
            }
            else if(location == "Dunoon"){
               cost = 40
            }
            else if(location == "Mitchells Plain"){
               cost = 40
            }
    }
}
//the third function should get the number of single tripscfrom the above function accordingly

//the fourth one should get the price per single trip

//the fifth one should get the number of return trips if it is a return trip

//the sixth one should get the price per return trip if it is a return trip


return {
    enterPoints,
    getEnteredPoints,
    calculateTrips
}

}