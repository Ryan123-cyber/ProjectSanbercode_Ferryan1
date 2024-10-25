import { Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";

Given('User asd', () => {
    loginPage.verifyLoginPage().should('have.text','sadaa')
})