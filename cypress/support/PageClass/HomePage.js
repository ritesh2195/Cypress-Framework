/// <reference types="cypress" />
import LoginPage from "../PageClass/LoginPage"
import ContactUsPage from '../PageClass/ContactUsPage'
class HomePage{

    #ConstactUs = "a[title='Contact Us']"

    #SignIn = "a[title='Log in to your customer account']"

    #Search = '#search_query_top'

    naviagateToHomePage(){

        cy.visit(Cypress.env('url'))
    }

    navigateToContactUsPage(){

        cy.get(this.#ConstactUs).click()

        return new ContactUsPage()
    }

    navigateToSignInPage(){

        cy.get(this.#SignIn).click()

        return new LoginPage()
    }

    navigateToSignUpPage(){

        cy.get(this.#SignIn).click()
    }
}

export default HomePage;

