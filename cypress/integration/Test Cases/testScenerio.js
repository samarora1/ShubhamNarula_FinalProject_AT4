/// <reference types = "cypress" />

// Importing page classes that were made beforehand
import loginPage from "../Page Classes/loginPage";
import categorySelection from "../Page Classes/categorySelection";
import productSelection from "../Page Classes/productSelection";
import shopping from "../Page Classes/shopping";
import checkout from "../Page Classes/checkout";

// Setting up test cases
describe ('Test Suite', function() {

    it('Valid Login Test', function() {
        // Creating object for the class loginPage
        const lp = new loginPage()

        lp.visitHome()
        lp.moveToLogin()
        lp.fillUsername('samishere')
        lp.fillPassword('doomdoom')
        lp.login()

        // Assertion to verify that we logged in successfully
        cy.title().should('be.equal', 'My Account')

        
    })

    it('Category Selection Test', function() {
        
        // Creating object for the class categorySelection
        const cs = new categorySelection()

        // Action method to select a category
        cy.xpath('//nav[@class="subnav"]/ul[1]/li[6]').click()

        // Action method to verify that we land on the correct category page
        cs.assertCategory('Men')
    })

    it('Product Selection Test', function() {
        
        // Creating object for the class categorySelection
        const ps = new productSelection()

        // Action method to select a product
        ps.selectProduct('Dove Men +Care Body Wash')

        // Action method to verify that we land on the correct category page
        ps.assertProduct('Dove Men +Care Body Wash')
    })

    it('Shopping Test', function() {
        
        // Creating object for the class categorySelection
        const sh = new shopping()

        sh.setQuantity('6')
        sh.addToCart()
        sh.assertCart('Shopping Cart')
    })

    it('Checkout Test', function() {
        
        // Creating object for the class categorySelection
        const co = new checkout()
        const lp = new loginPage()

        co.clickCheckout()
        lp.fillUsername('samishere')
        lp.fillPassword('doomdoom')
        lp.login()
        co.assertCheckoutConfirmation('Checkout Confirmation')
        co.confirmOrder()
        co.confirmationMessage()
        co.continueClick()
    })
})