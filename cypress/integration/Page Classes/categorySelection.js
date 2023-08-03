/// <reference types="cypress" />

class categorySelection {
    
    /*
    // Category selection is done manually due to some error in the code
    selectCategory(value) {
        const sc = cy.contains(value)
        sc.click()
        return this
    }
    */
    
    // Action method to assert whether we land on the correct page
    assertCategory(value) {
        const assrt = cy.title().should('be.equal', value)
        return assrt
    }
}

export default categorySelection