/// <reference types="cypress" />

class LoginPage{

    #Email = '#email'

    #Password = '#passwd'

    #Submit = '#SubmitLogin'

    #AccountInfo = '.account span'

    #LoginEmail = "input[name='email']:nth-child(2)"

    #Message = '.info-account'

    doLogin(email, password){

        cy.get(this.#Email).type(email)

        cy.get(this.#Password).type(password)

        cy.get(this.#Submit).click()
    }

    verifyLoginTest(){

        return cy.get(this.#AccountInfo)
    }

    verifyURL(){

        return cy.url()
    }

    verifyLoginMessage(){

        return cy.get(this.#Message)

    }

    verifyLoginEmail(){

        cy.contains('My personal information').click()

        return cy.get(this.#LoginEmail)
    }
}
export default LoginPage;