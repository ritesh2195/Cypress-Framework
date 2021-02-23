/// <reference types="cypress" />
import PageClassManager from '../../support/Manager/PageClassManager'

describe('SignUp Test', function(){

    beforeEach('fixture', function(){

        cy.fixture('SignUp').then(function(data){

            this.data = data
        })
    })

    it('SignUp Test with valid details', function(){

        const manager = new PageClassManager()

        const homePage = manager.getHomePage()

        const loginPage = manager.getLoginPage()

        const signUpPage = manager.getSignUpPage()

        homePage.naviagateToHomePage()

        homePage.navigateToSignUpPage()

        loginPage.createSignUpEmail(this.data.email)

        signUpPage.enterGender(this.data.gender)

        signUpPage.enterName(this.data.firstName, this.data.lastName)

        signUpPage.enterPassword(this.data.password)

        signUpPage.selectDateOfBirth(this.data.date, this.data.month, this.data.year)

        signUpPage.enterCompanyName(this.data.companyName)

        signUpPage.enterAddress(this.data.address)

        signUpPage.enterCityName(this.data.cityName)

        signUpPage.selectStateName(this.data.stateName)

        signUpPage.enterZipCode(this.data.zipCode)

        signUpPage.enterMobileNo(this.data.mobileNo)

        signUpPage.enterAddressAlias(this.data.aliasAddress)

        signUpPage.clickSubmit() 

        signUpPage.verifyURL().should('include', 'my-account')

        signUpPage.verifySignUpMessage().should('include.text', 'Welcome to your account.')

        signUpPage.verifySignUpTest().should('have.text', this.data.firstName+' '+this.data.lastName)

        signUpPage.verifySignUpEmail().should('have.value', this.data.email) 
    })
})