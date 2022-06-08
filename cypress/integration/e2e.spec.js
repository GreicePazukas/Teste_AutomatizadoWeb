/// <reference types="cypress" />

var faker = require('faker');


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('perfil').then(dados => {
        })

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        var quantidade = 1

        //primeira compra

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.AddProduto('Abominable Hoodie', 'L', 'Green', '1')

        //Segunda compra

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.AddProduto('Augusta Pullover Jacket', 'M', 'Blue', '1')
        cy.get('.single_add_to_cart_button').click()


        //Terceira compra

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()

        cy.AddProduto('Cassia Funnel Sweatshirt', 'S', 'White', '1')

        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')

        //Quarta compra

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get('ul.page-numbers > :nth-child(4) > .page-numbers').click()
    
        cy.AddProduto('Erica Evercool Sports Bra', 'S', 'Blue','1')

        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
       

        cy.get('.woocommerce-message > .button').click()
       
        //Finalizando a compra com o preenchimento do Checkout

        let emailFaker = faker.internet.email()
        let nomeFaker  = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        cy.get('.checkout-button').click()
        cy.preenchimentoCheckout(nomeFaker,sobrenomeFaker, 'Pazukas', 'Brasil', 'Av. Brasil', '30', 'São Paulo', '03590030', '1199999999',emailFaker, 'Felicidade')

    });



})