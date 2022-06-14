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

        var quantidade = 10

        //primeira compra

        cy.AddProduto('Abominable Hoodie', 'L', 'Red', '2')

        //Segunda compra

        cy.AddProduto('Aero Daily Fitness Tee', 'XS', 'Brown', '3')

        //Terceira compra

        cy.AddProduto('Aether Gym Pant', '33', 'Blue', '4')

        
        //Quarta compra

        cy.AddProduto('Abominable Hoodie', 'L', 'Red','1')

    
        //Finalizando a compra com o preenchimento do Checkout

        let emailFaker = faker.internet.email()
        let nomeFaker  = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        
         cy.preenchimentoCheckout(nomeFaker,sobrenomeFaker, 'Pazukas', 'Brasil', 'Av. Brasil', '30', 'São Paulo', '03590030', '1199999999',emailFaker, 'Felicidade')
         cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });



})