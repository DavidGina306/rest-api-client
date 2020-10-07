<template>
    <b-modal id="modal_about" title="Sobre" hide-footer>
        <p>
            Esta aplicação tem por finalidade realizar testes de consumo de API REST a fim de solucionar o problema
            abaixo.
        </p>
        <p class="font-weight-bold">
            1. Leia (consuma) via post, os dados em jason que esta api retorna;<br>
            2. Imprima no console ou na web os dados de retorno;, para isso,
        </p>
        <p>
            Usa-se de um cenário de cadastro de produtos.<br>
            É possivel realizar operações com verbos HTTP (GET, POST, PUT, DELETE) a fim de suprir todo o fluxo de um
            CRUD de produtos.
        </p>
        <p>
            A aplicação disponibiliza um <b>log</b>(opção disponível no menu principal) para preview de todas as respostas de requisições realizadas
        </p>
    </b-modal>
</template>

<script>
    export default {
        name: "AboutModal"
    }
</script>