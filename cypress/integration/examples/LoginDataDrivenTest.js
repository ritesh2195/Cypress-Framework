/// <reference types="cypress" />
import HomePage from "../../support/PageClass/HomePage";

describe('Login Test', function(){

    beforeEach('fixture',function(){

        cy.fixture('DataDriven').then(function(data){

            this.data = data
        })
    })

    it('Login Test with valid credentials', function(){

        this.data.forEach(user=>{

            const homePage = new HomePage()

            homePage.naviagateToHomePage()

            const loginPage =homePage.navigateToSignInPage()

            loginPage.doLogin(user.email, user.password).then(function(){

                if(user.expectedResult==='Pass'){

                    loginPage.verifyURL().should('include','my-account')
    
                    loginPage.verifyLoginMessage().should('include.text', 'Welcome to your account.')
    
                    loginPage.verifyLoginTest().should('have.text', user.name)
    
                    loginPage.verifyLoginEmail().should('have.value', user.email)
    
                    cy.get("a[title='Log me out']").click()
    
                }

                else if(user.expectedResult==='Fail'){

                    loginPage.verifyURL().should('include','authentication')

                    cy.get('ol > li').should('include.text', 'Authentication failed.')

                }

            })

        })


    })
})