/// <reference types="cypress" />
import PageClassManager from '../../support/Manager/PageClassManager'
describe('Login Test', function(){

    beforeEach('fixture',function(){

        cy.fixture('DataDriven').then(function(data){

            this.data = data
        })
    })

    it('Login Test with valid credentials', function(){

        this.data.forEach(user=>{

            const manager = new PageClassManager()

            const homePage = manager.getHomePage()

            homePage.naviagateToHomePage()

            homePage.navigateToSignInPage()

            const loginPage = manager.getLoginPage()

            loginPage.doLogin(user.email, user.password).then(function(){

                if(user.expectedResult==='Pass'){

                    loginPage.verifyURL().should('include','my-account')
    
                    loginPage.verifyLoginMessage().should('include.text', 'Welcome to your account.')
    
                    loginPage.verifyLoginTest().should('have.text', user.name)
    
                    loginPage.verifyLoginEmail().should('have.value', user.email)
    
                    loginPage.clickLogout()
    
                }

                else if(user.expectedResult==='Fail'){

                    loginPage.verifyURL().should('include','authentication')

                    loginPage.verifyInvalidCredentialsMessage().should('include.text', 'Authentication failed.')

                }

            })

        })


    })
})