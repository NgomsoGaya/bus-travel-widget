describe("The Bus Travel Widget", function () {

    it("It should return 0 if no points have been added yet", function () {

       let bustravel = busTravel()

       bustravel.enterPoints("")

        assert.equal(0, bustravel.getEnteredPoints());
    })

    it("It should return 100 if 100 points have been added", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("100")
 
         assert.equal(100, bustravel.getEnteredPoints());
     })

     it("It should return 0 if points added are not a numer", function () {

        let bustravel = busTravel()
 
        bustravel.enterPoints("buses")
 
         assert.equal(0, bustravel.getEnteredPoints());
     })



})