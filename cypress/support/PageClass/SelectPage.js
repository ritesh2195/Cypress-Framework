/// <reference types="cypress" />
class SelectPage{

    #SearchBox = '#search_query_top'

    #Price = '.our_price_display span'

    #Quantity = '#quantity_wanted'

    #Size = '#group_1'

    #ColorPick = '.color_pick'

    #AddCart = "button[name$='Submit']"

    #ProductDisplay = '.pb-center-column h1'

    #Proceed = '.button-medium > span'

    selectProduct(product, chooseProduct){

        cy.get(this.#SearchBox).type(product)

        cy.wait(5000)

        cy.contains(chooseProduct).click()
    }

    verifySelectProduct(){

        return cy.get(this.#ProductDisplay)
    }

    getProductPrice(){

        return cy.get(this.#Price)
    }

    addProductToCart(no, size, color){

        cy.get(this.#Quantity).clear()

        cy.get(this.#Quantity).type(no)

        cy.get(this.#Size).select(size)

        if(color==='Orange'){

            cy.get(this.#ColorPick).eq(0).click()
        }

        else if(color==='Blue'){

            cy.get(this.#ColorPick).eq(1).click()
        }

        cy.get("button[name='Submit']").click()

        cy.wait(2000)
    }

    proceedToCheckout(){

        cy.get(this.#Proceed).click()
    }
}

export default SelectPage;