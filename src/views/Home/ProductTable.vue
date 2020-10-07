<template>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th style="width: 100px" class="text-center">Acões</th>
                <th>Nome</th>
                <th style="width: 100px" class="text-center">Quantidade</th>
                <th style="width: 100px" class="text-center">Preço(R$)</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="products.length === 0">
                <td class="text-center" colspan="4">Sem registros de produtos</td>
            </tr>
            <tr v-for="product in products" :key="product.id">
                <td>
                    <b-dropdown size="sm" text="Ações" class="m-md-2">
                        <b-dropdown-item @click="$emit('edit-item', product.id)"><i class="fa fa-edit"></i> Editar
                        </b-dropdown-item>
                        <b-dropdown-item @click="$emit('drop-item', product.id)"><i class="fa fa-trash text-danger"></i>
                            Excluir
                        </b-dropdown-item>
                    </b-dropdown>
                </td>
                <td>{{product.name}}</td>
                <td class="text-center">{{product.quantity}}</td>
                <td class="text-center">{{product.price | maskMoney}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProductTable",
        data() {
            return {
                products: []
            }
        },
        filters: {
            maskMoney(value) {
                return parseFloat(value).toFixed(2).replace('.', ',');
            }
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            async getProducts() {
                try {
                    const {data} = await axios.get('products');
                    this.products = data;
                } catch (e) {
                    console.log(e);
                }

            }
        }
    }
</script>