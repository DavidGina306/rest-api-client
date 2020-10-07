<template>
    <div>
        <b-modal id="product_modal" @hidden="fields = {}" title="Cadastro de produto" hide-footer>
            <form @submit.prevent="send">
                <b-form-group label="Nome">
                    <b-input name="name" v-model="fields.name" placeholder="TV" :required="true"/>
                </b-form-group>
                <b-form-group label="Quantidade">
                    <b-input name="quantity" v-model="fields.quantity" type="number" placeholder="10"/>
                </b-form-group>
                <b-form-group label="Preço">
                    <b-input name="price"
                             v-model="fields.price"
                             v-money="money"
                             :required="true"/>
                </b-form-group>
                <b-form-group class="text-right">
                    <b-button type="submit">
                        <i class="fa fa-save"></i> Enviar
                    </b-button>
                </b-form-group>

            </form>
        </b-modal>
    </div>
</template>

<script>
    import {VMoney} from 'v-money';

    export default {
        name: "FormRequest",
        directives: {money: VMoney},
        data() {
            return {
                fields: {
                    name: '',
                    quantity: 0,
                    price: 0,
                },
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: '',
                    precision: 2,
                    masked: true
                }
            }
        },
        methods: {
            async edit(id) {
                let {data} = await axios.get(`products/product/${id}`);
                data.price  = parseFloat(data.price).toFixed(2);
                this.fields = data;
                this.$bvModal.show('product_modal');
            },
            drop(id) {
                this.$toast.question("Deseja excluir este item?", "Alerta", {
                    position: 'center',
                    overlay: true,
                    buttons: [
                        ['<button><b>Sim</b></button>', (instance, toast) => {
                            instance.hide({transitionOut: 'fadeOut'}, toast, 'button');
                            axios.delete(`products/product/${id}`).then(() => {
                                this.$emit('success');
                            }).catch(err => {
                                this.$toast.error("Falha ao excluir o item");
                            });
                        }, true],
                        ['<button>Não</button>', (instance, toast) => {
                            instance.hide({transitionOut: 'fadeOut'}, toast, 'button');
                        }],
                    ]
                });
            },
            async send() {
                try {
                    this.fields.price = parseFloat(String(this.fields.price).replace('.', '').replace(',', '.')).toFixed(2)
                    await axios('products/product', {
                        method: this.fields?.id ? 'put' : 'post',
                        data: this.fields
                    });
                    this.$toast.success("Solicitação realizada com sucesso!");
                    this.$emit('success');
                    this.$nextTick(() => {
                        this.$bvModal.hide('product_modal');
                    });
                } catch (e) {
                    console.log(e);
                    this.$toast.error("Falha na solicitação");
                }
            }
        }
    }
</script>
