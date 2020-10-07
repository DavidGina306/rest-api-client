<template>
    <div>
        <b-container class="pt-2">
            <b-row>
                <b-col md="8" offset-md="3">
                    <h4>Produtos Registrados</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="2" offset-md="1" class="mb-2">
                    <b-button v-b-modal.product_modal block>
                        <i class="fa fa-plus"></i> Novo produto
                    </b-button>
                </b-col>
                <b-col md="8">
                    <product-table ref="product_table" @drop-item="$refs.form.drop($event)" @edit-item="$refs.form.edit($event)"/>
                </b-col>
            </b-row>
        </b-container>
        <form-request ref="form" @success="$refs.product_table.getProducts()"/>

    </div>
</template>
<script>
    import FormRequest from "./FormRequest";
    import TheHeader from "../TheHeader";
    import ProductTable from "./ProductTable";

    export default {
        name: "Home",
        components: {ProductTable, TheHeader, FormRequest}
    }
</script>