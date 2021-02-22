import HomePage from "../../support/PageClass/HomePage";
import SelectPage from '../../support/PageClass/SelectPage'
import SummaryPage from '../../support/PageClass/SummaryPage'
describe('Search Test', function(){

    beforeEach('fixture', function(){

        cy.fixture('search').then(function(data){

            this.data = data
        })
    })

    it('Select item', function(){

        const homePage = new HomePage()

        const selectPage = new SelectPage()

        const summaryPage = new SummaryPage()

        homePage.naviagateToHomePage()

        const loginPage = homePage.navigateToSignInPage()

        loginPage.doLogin(this.data.email, this.data.password)

        selectPage.selectProduct(this.data.search, this.data.product)

        selectPage.verifySelectProduct().invoke('text').then(function(Text){

            expect('Faded Short Sleeve T-shirts').to.eql(Text)

        })

        selectPage.getProductPrice().invoke('text').then(function(price){

            selectPage.addProductToCart(this.data.no, this.data.size, this.data.color)

            selectPage.proceedToCheckout()

            summaryPage.verifyTotalPrice().invoke('text').then(function(totalPrice){

                totalPrice = totalPrice.trim()

                var totalPrice1 = Number(totalPrice.replace(/[^0-9\.]+/g,""))

                var price1 = Number(price.replace(/[^0-9\.]+/g,""))

                expect(totalPrice1).to.eql(this.data.no*price1)

                summaryPage.getShipingPrice().invoke('text').then(function(Text){

                    var shippingCharge = Number(Text.replace(/[^0-9\.]+/g,""))

                    summaryPage.getGrandTotal().invoke('text').then(function(grand){

                        var grandTotal = Number(grand.replace(/[^0-9\.]+/g,""))

                        expect(grandTotal).to.eql(totalPrice1+shippingCharge)
                    })

                })

                
            })
        })

        summaryPage.proceedToCheckout()

        summaryPage.selectPaymentMethod()

        summaryPage.confirmOrder()

        summaryPage.verifyOrderMessage().should('have.text', 'Your order on My Store is complete.')
        
    })
})