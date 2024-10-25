import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 
import loginPage from "../../../pom/ForgetPassword/forget.password.cy";
import ForgotPassword from "../../../pom/ForgetPassword/forget.password.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.wait(10000);
});

 When ('I input the username',() => {
    ForgotPassword.inputUsername().type('admin');
 });