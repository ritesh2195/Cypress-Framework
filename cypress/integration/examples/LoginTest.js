/// <reference types="cypress" />
import PageClassManager from '../../support/Manager/PageClassManager'

describe('Login Test', function(){

    beforeEach('fixture',function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

    it('Login Test with valid credentials', function(){

        const manager = new PageClassManager()

        const homePage = manager.getHomePage()

        const loginPage = manager.getLoginPage()

        homePage.naviagateToHomePage()

        homePage.navigateToSignInPage()

        loginPage.doLogin(this.data.email, this.data.password)

        loginPage.verifyURL().should('include','my-account')

        loginPage.verifyLoginMessage().should('include.text', 'Welcome to your account.')

        loginPage.verifyLoginTest().should('have.text', this.data.name)

        loginPage.verifyLoginEmail().should('have.value', this.data.email)


    })
})