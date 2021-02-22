/// <reference types="cypress" />
class SignUpPage{

    #EmailCreate = '#email_create'

    #SubmitCreate = "button[name='SubmitCreate']"

    #Gender_Male = '#id_gender1'

    #Gender_Female = '#id_gender2'

    #FirstName = '#customer_firstname'

    #LastName = '#customer_lastname'

    #Password = '#passwd'

    #Date = '#days'

    #Month = '#months'

    #Year = '#years'

    #Company = '#company'

    #Address = '#address1'

    #City = '#city'

    #State = '#id_state'

    #ZipCode = '#postcode'

    #MobileNo = '#phone_mobile'

    #AddressAlias = '#alias'

    #SubmitButton = '#submitAccount'

    #AccountInfo = '.account span'

    #LoginEmail = "input[name='email']:nth-child(2)"

    #Message = '.info-account'

    createSignUpEmail(emailId){

        cy.get(this.#EmailCreate).type(emailId)

        cy.wait(5000)

        cy.get(this.#SubmitCreate).click()

    }

    enterGender(gender){

        if(gender==='Male'){

            cy.get(this.#Gender_Male).click()
        }

        else if(gender==='Female'){

            cy.get(this.#Gender_Female).click()
        }

    }

    enterName(first_Name, last_Name){

        cy.get(this.#FirstName).type(first_Name)

        cy.get(this.#LastName).type(last_Name)
    }

    enterPassword(password){

        cy.get(this.#Password).type(password)

    }

    selectDateOfBirth(date, month, year){

        cy.get(this.#Date).select(date)

        cy.get(this.#Month).select(month)

        cy.get(this.#Year).select(year)

    }

    enterCompanyName(companyNme){

        cy.get(this.#Company).type(companyNme)
    }

    enterAddress(address){

        cy.get(this.#Address).type(address)

    }

    enterCityName(city){

        cy.get(this.#City).type(city)
    }

    selectStateName(state){

        cy.get(this.#State).select(state)
    }

    enterZipCode(code){

        cy.get(this.#ZipCode).type(code)
    }

    enterMobileNo(mobile){

        cy.get(this.#MobileNo).type(mobile)
    }

    enterAddressAlias(alias){

        cy.get(this.#AddressAlias).type(alias)
    }

    clickSubmit(){

        cy.get(this.#SubmitButton).click()
    }

    verifySignUpTest(){

        return cy.get(this.#AccountInfo)
    }

    verifyURL(){

        return cy.url()
    }

    verifySignUpMessage(){

        return cy.get(this.#Message)

    }

    verifySignUpEmail(){

        cy.contains('My personal information').click()

        return cy.get(this.#LoginEmail)
    }

}

export default SignUpPage;