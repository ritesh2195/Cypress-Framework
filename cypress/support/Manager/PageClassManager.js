import HomePage from '../PageClass/HomePage'
import LoginPage from '../PageClass/LoginPage'
import SummaryPage from '../PageClass/SummaryPage'
import ContactUsPage from '../PageClass/ContactUsPage'
import SignUpPage from '../PageClass/SignUpPage'
import SelectPage from '../PageClass/SelectPage'
class PageClassManager{

    getHomePage(){

        return new HomePage()

    }

    getLoginPage(){

        return new LoginPage()
    }

    getSummaryPage(){

        return new SummaryPage()

    }

    getContactUsPage(){

        return new ContactUsPage()

    }

    getSelectPage(){

        return new SelectPage()
    }

    getSignUpPage(){

        return new SignUpPage()
    }
}

export default PageClassManager;