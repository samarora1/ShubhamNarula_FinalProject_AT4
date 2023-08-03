/// <reference types="cypress" />

class shopping {
    
    // Action method to select product
    setQuantity(value) {
        const sq = cy.get('#product_quantity')
        sq.clear()
        sq.type(value)
        return this
    }
    
    // Action method to click on add to cart
    addToCart() {
        const ac = cy.contains('Add to Cart')
        ac.click()
        return this
    }

    // Action method to assert whether we land on the correct page
    assertCart(value) {
        const assrt = cy.title().should('be.equal', value)
        return assrt
    }
}

export default shopping