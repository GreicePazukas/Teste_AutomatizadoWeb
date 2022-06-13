// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('AddProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.product-block').contains(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
   
    
});

Cypress.Commands.add('preenchimentoCheckout', (nome, sobrenome, empresa, pais, endereco, numero, Estado, cep, telefone, email, senha) => {
    cy.get('.dropdown-toggle > .mini-cart-items').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()

    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_address_2').type(numero)
    cy.get('#billing_city').type(Estado)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#createaccount').click()
    cy.get('#account_password').type(senha)
    cy.get('#payment_method_cheque').click()
    cy.get('#terms').click()

    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

});

