/// <reference types="cypress" />
import 'cypress-file-upload'

class ContactUsPage{

    #SubjectHeading = '#id_contact'

    #Email = '#email'

    #OrderReference = '#id_order'

    #FileUpload = '#fileUpload'

    #Message = '#message'

    #SendButton = '#submitMessage'

    selectSubjectHeading(heading){

        cy.get(this.#SubjectHeading).select(heading)
    }

    enterEmailId(email){

        cy.get(this.#Email).type(email)
    }

    enterOrderReference(order){

        cy.get(this.#OrderReference).type(order)
    }

    uploadFile(file){

        cy.get(this.#FileUpload).attachFile(file)

        cy.wait(2000)

        return cy.get('.filename')
    }

    enterMessage(message){

        cy.get(this.#Message).type(message)
    }

    sendMessge(){

        cy.get(this.#SendButton).click()
    }

    verifyAlertMessage(){

        return cy.get('.alert')
    }
}

export default ContactUsPage;