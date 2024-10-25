require('cypress-xpath');
class ForgotPassword {

    static verifyPasswordPage() {
        return cy.get('.oxd-form').contains('Reset Password');
    }

    static inputUsername () {
        return cy.get('input[name="username"]')
    }

    static clickCancelButton () {
        return cy.get('button[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click()
    }

    static clickResetPasswordButton () {
        return cy.get('button[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click()
    }

    static verifyErrorField () {
        return cy.get('input[class="oxd-input oxd-input--active oxd-input--error"]').should('be.visible');
    }

    static verifyErrorFieldMessage () {
        return cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required');
    }


    static verifySucessPageUrl () {
        return cy.url().should('include', '/auth/sendPasswordReset');
    }

    static verifySuccessTitle () {
        return cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password link sent successfully')
    }

    static verifySuccessMessage () {
        return cy.xpath('(//p[@class="oxd-text oxd-text--p"])[1]').should('have.text', 'A reset password link has been sent to you via email.')
    }
}
