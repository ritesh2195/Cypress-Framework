/// <reference types="cypress" />
import HomePage from "../../support/PageClass/HomePage";

describe('Login Test', function(){

    beforeEach('fixture',function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

    it('Login Test with valid credentials', function(){

        const homePage = new HomePage()

        homePage.naviagateToHomePage()

        const loginPage =homePage.navigateToSignInPage()

        loginPage.doLogin(this.data.email, this.data.password)

        loginPage.verifyURL().should('include','my-account')

        loginPage.verifyLoginMessage().should('include.text', 'Welcome to your account.')

        loginPage.verifyLoginTest().should('have.text', this.data.name)

        loginPage.verifyLoginEmail().should('have.value', this.data.email)


    })
})