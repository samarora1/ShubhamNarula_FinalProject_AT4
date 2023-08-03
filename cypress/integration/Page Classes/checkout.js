/// <reference types="cypress" />

class checkout {
    
    // Action method to click on checkout
    clickCheckout() {
        const cc = cy.get('#cart_checkout2')
        cc.click()
        return this
    }
    
    // Action method to assert whether we land on the checkout confirmation page
    assertCheckoutConfirmation(value) {
        const assrtCC = cy.title().should('be.equal', value)
        return assrtCC
    }

    // Action method to click on confirm order
    confirmOrder() {
        const co = cy.get('#checkout_btn')
        co.click()
        return this
    }

    // Action method to assert confirm order processed message
    confirmationMessage() {
        const assrt = cy.get('[class="heading1"]')
        assrt.should('be.visible')
        return this
    }

    // Action method to click on continue
    continueClick() {
        const cco = cy.contains('Continue')
        cco.click()
        return this
    }
}

export default checkout