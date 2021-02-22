/// <reference types="cypress" />
import HomePage from "../../support/PageClass/HomePage";
import LoginPage from "../../support/PageClass/LoginPage"

describe('SignUp Test', function(){

    beforeEach('fixture', function(){

        cy.fixture('SignUp').then(function(data){

            this.data = data
        })
    })

    it('SignUp Test with valid details', function(){

        const homePage = new HomePage()

        const loginPage = new LoginPage()

        homePage.naviagateToHomePage()

        homePage.navigateToSignUpPage()

        const signUpPage = loginPage.createSignUpEmail(this.data.email)

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