describe("The Bus Travel Widget", function () {

    it("It should return 0 if no points have been added yet", function () {

       const bustravel = busTravel()
       bustravel.enterPoints("")

        assert.equal(0, bustravel.getEnteredPoints());
    })

})