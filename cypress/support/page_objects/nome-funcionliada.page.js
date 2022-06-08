class EnderecoPage {

    EditarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type('Pazukas')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()

        cy.get('#billing_address_1').type('Av.Brasil')
        cy.get('#billing_address_2').type('30')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_postcode').type('03590000')
        cy.get('#billing_phone').type('11990000000')
        cy.get('#billing_email').type('greice.teste@teste.com')
        cy.get('#createaccount').click()
        cy.get('#account_password').type('Felicidade')
        cy.get('#order_comments').type('Ligar antes da entrega')
        cy.get('#payment_method_cheque').click()
        cy.get('#terms').click()

        cy.get('#place_order').click()



    }

    nomeMetodo(parametros) { }
    //ações do método


}

export default new EnderecoPage()