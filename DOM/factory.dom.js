const InputElement = document.querySelector(".pointInput")
const dropdownElement = document.querySelector(".dropdown");
const checkboxElement = document.querySelector(".check")
const calculateElement = document.querySelector(".calculate")
const numberOf1TripElement = document.querySelector(".noOf1Trip")
const priceOf1TripElement = document.querySelector(".priceOf1Trip")
const numberOf2TripElement = document.querySelector(".noOf2Trips")
const priceOf2TripElement = document.querySelector(".priceOf2Trips")

const bustravel = busTravel()

function linkCalculateToDOM(){
    var travelTimeRadioBtn = document.querySelector("input[name='TravelTime']:checked");
    var checkReturnBtn = document.querySelector("input[name='returnTrip']:checked");

    if(travelTimeRadioBtn && !checkReturnBtn){
        bustravel.enterPoints(InputElement.value)
        bustravel.calculateTrips(travelTimeRadioBtn.value, dropdownElement.value)
        numberOf1TripElement.innerHTML = bustravel.getNumberOfSingleTrips() 
        priceOf1TripElement.innerHTML = bustravel.getPricePerSingleTrip()
    }

    console.log(InputElement.value)
    console.log(dropdownElement.value)

    if(checkReturnBtn ){
        bustravel.enterPoints(InputElement.value)
        bustravel.calculateTrips(travelTimeRadioBtn.value, dropdownElement.value)
        numberOf2TripElement.innerHTML = bustravel.getNumberOfReturnTrips()
        priceOf2TripElement.innerHTML = bustravel.getPricePerReturnTrip()
        //numberOf1TripElement.innerHTML = ""
       // priceOf1TripElement.innerHTML = ""
    }
    

}
calculateElement.addEventListener("click", linkCalculateToDOM)
