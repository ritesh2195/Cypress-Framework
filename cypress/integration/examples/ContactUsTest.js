/// <reference types="cypress" />
import PageClassManager from '../../support/Manager/PageClassManager'

describe('ContactUs Test', function(){

    beforeEach('fixture', function(){

        cy.fixture('ContactUs').then(function(data){

            this.data = data
        })
    })


    it('with valid details', function(){

        const file = 'abc.txt'

        const manager = new PageClassManager()

        const homePage = manager.getHomePage()

        homePage.naviagateToHomePage()

        homePage.navigateToContactUsPage()

        const contactPage = manager.getContactUsPage()

        contactPage.selectSubjectHeading(this.data.heading)

        contactPage.enterEmailId(this.data.email)

        contactPage.enterOrderReference(this.data.orderReference)

        contactPage.uploadFile(file).should('include.text', file)

        contactPage.enterMessage(this.data.message)

        contactPage.sendMessge()

        contactPage.verifyAlertMessage().should('include.text', 'Your message has been successfully sent to our team.')


    })
})