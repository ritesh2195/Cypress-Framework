/// <reference types="cypress" />

import SelectPage from "./SelectPage"

class SummaryPage{

    #ProductName = '.cart_description > .product-name > a'

    #UnitPrice = "span[id^='product_price']"

    #Quantity = "input[name^='quantity']:nth-child(2)"

    #TotalPrice = "span[id^='total_product_price']"

    #TotalShipping = '#total_shipping'

    #GrandTotal = '#total_price'

    #Proceed = "a[title$='Proceed to checkout']:nth-child(1)"

    #Order = '#cart_navigation > .button > span'

    verifyProductName(){

        return cy.get(this.#ProductName)
    }

    verifyUnitPrice(){

        return cy.get(this.#UnitPrice)
    }

    verifyTotalPrice(){

        return cy.get(this.#TotalPrice)
    }

    getGrandTotal(){

       return cy.get(this.#GrandTotal)
    }

    getShipingPrice(){

        return cy.get(this.#TotalShipping)
    }

    proceedToCheckout(){

        cy.get(this.#Proceed).click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('label').click()

        cy.get('.cart_navigation > .button > span').click()
    }

    selectPaymentMethod(){

        cy.get('.bankwire').click()
    }

    confirmOrder(){

        cy.get(this.#Order).click()
    }

    verifyOrderMessage(){

        return cy.get('.cheque-indent > .dark')
    }
}

export default SummaryPage;