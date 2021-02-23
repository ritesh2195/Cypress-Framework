/// <reference types="cypress" />
import HomePage from '../../support/PageClass/HomePage'

describe('ContactUs Test', function(){

    beforeEach('fixture', function(){

        cy.fixture('ContactUs').then(function(data){

            this.data = data
        })
    })


    it('with valid details', function(){

        const file = 'abc.txt'

        const homePage = new HomePage()

        homePage.naviagateToHomePage()

        const contactPage = homePage.navigateToContactUsPage()

        contactPage.selectSubjectHeading(this.data.heading)

        contactPage.enterEmailId(this.data.email)

        contactPage.enterOrderReference(this.data.orderReference)

        contactPage.uploadFile(file).should('include.text', file)

        contactPage.enterMessage(this.data.message)

        contactPage.sendMessge()

        contactPage.verifyAlertMessage().should('include.text', 'Your message has been successfully sent to our team.')


    })
})