describe("The Bus Travel Widget", function () {

    describe("Testing the input", function () {
    it("It should return 0 points if no points have been added yet", function () {

       let bustravel = busTravel()

       bustravel.enterPoints("")

        assert.equal(0, bustravel.getEnteredPoints());
    })
    it("It should return 100 points if 100 points have been added", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("100")
 
         assert.equal(100, bustravel.getEnteredPoints());
     })

     it("It should return 0 points if points added are not a number", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("buses")
 
         assert.equal(0, bustravel.getEnteredPoints());
     })
    })

    describe("Testing not enough points for single trips", function () {
     it("It should return 0 trips if points added are not enough for a trip", function () {

        let bustravel = busTravel()
        
        bustravel.enterPoints("30")
        bustravel.calculateTrips("Off-peak", 'Khayelitsha')
         assert.equal(0, bustravel.getNumberOfSingleTrips());
     })

     it("It should return 0 trips if points added are not enough for a trip", function () {

        let bustravel = busTravel()
        
        bustravel.enterPoints("20")
        bustravel.calculateTrips("Off-peak", 'Dunoon')
         assert.equal(0, bustravel.getNumberOfSingleTrips());
     })

     it("It should return 0 trips if points added are not enough for a trip", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("25")
        bustravel.calculateTrips("Off-peak", 'MitchellsPlain')
         assert.equal(0, bustravel.getNumberOfSingleTrips())
        
     })
    })

    describe("Testing for single trips per points", function () {
     it("It should return 4 if points added are equivalent to 4 trips", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("120")
        bustravel.calculateTrips("Off-peak", 'MitchellsPlain')
         assert.equal(4, bustravel.getNumberOfSingleTrips())
        
     })

     it("It should return 3 if points added are equivalent to 3 trips", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("75")
        bustravel.calculateTrips("Off-peak", 'Dunoon')
         assert.equal(3, bustravel.getNumberOfSingleTrips())
        
     })
     it("It should return 1 if points added are equivalent to 1 trip", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("50")
        bustravel.calculateTrips("Off-peak", 'Khayelitsha')
         assert.equal(1, bustravel.getNumberOfSingleTrips())
        
     })
    })

    describe("Testing for not enough points for a return trip", function () {
     it("It should return 3 if points added are equivalent to 3 trips", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("120")
        bustravel.calculateTrips("Off-peak", 'MitchellsPlain')
         assert.equal(0, bustravel.getNumberOfSingleTrips())
        
     })

     it("It should return 4 if points added are equivalent to 4 trips", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("100")
        bustravel.calculateTrips("Off-peak", 'Dunoon')
         assert.equal(0, bustravel.getNumberOfSingleTrips())
        
     })
     it("It should return 4 if points added are equivalent to 4 trips", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("100")
        bustravel.calculateTrips("Off-peak", 'Dunoon')
         assert.equal(0, bustravel.getNumberOfSingleTrips())
        
     })
    })

})