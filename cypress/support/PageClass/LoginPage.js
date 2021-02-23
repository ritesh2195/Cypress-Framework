/// <reference types="cypress" />
import SignUpPage from "../PageClass/SignUpPage"

class LoginPage{

    #Email = '#email'

    #Password = '#passwd'

    #Submit = '#SubmitLogin'

    #EmailCreate = '#email_create'

    #SubmitCreate = '#SubmitCreate'

    #AccountInfo = '.account span'

    #LoginEmail = "input[name='email']:nth-child(2)"

    #Message = '.info-account'

    #Logout = "a[title='Log me out']"

    #InvalidDataMessage = 'ol > li'

    doLogin(email, password){

        cy.get(this.#Email).type(email)

        cy.get(this.#Password).type(password)

        return cy.get(this.#Submit).click()
    }

    clickLogout(){

        cy.get(this.#Logout).click()
    }

    verifyInvalidCredentialsMessage(){

        return cy.get(this.#InvalidDataMessage)
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

    createSignUpEmail(emailId){

        cy.get(this.#EmailCreate).type(emailId)

        cy.get(this.#SubmitCreate).click()

        return new SignUpPage()

    }
}
export default LoginPage;