/// <reference types="cypress" />

class productSelection {
    
    // Action method to select product
    selectProduct(value) {
        const sp = cy.contains(value)
        sp.click()
        return this
    }
    
    // Action method to assert whether we land on the correct page
    assertProduct(value) {
        const assrt = cy.title().should('be.equal', value)
        return assrt
    }
}

export default productSelection