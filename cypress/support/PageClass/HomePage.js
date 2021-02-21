/// <reference types="cypress" />
import LoginPage from "../PageClass/LoginPage"
class HomePage{

    #ConstactUs = "a[title='Contact Us']"

    #SignIn = "a[title='Log in to your customer account']"

    #Search = '#search_query_top'

    naviagateToHomePage(){

        cy.visit(Cypress.env('url'))
    }

    navigateToConstactUsPage(){

        cy.get(this.#ConstactUs).click()
    }

    navigateToSignInPage(){

        cy.get(this.#SignIn).click()

        return new LoginPage()
    }
}

export default HomePage;

