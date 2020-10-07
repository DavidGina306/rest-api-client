<template>
    <b-modal id="modal_logs" title="Logs de resposta" @show="getLogs" hide-footer>
        <p class="text-center">
            Visualize as respostas das requisições realizadas
        </p>
        <hr>
        <div class="text-right">
            <b-button v-if="logs.length" v-b-tooltip="'Limpar logs'" variant="danger" @click.prevent="clearLog">
                &times;
            </b-button>
            <h4 class="text-center" v-else><i class="fa fa-file"></i> Sem Logs</h4>
        </div>
        <div v-for="(log, idx) in logs" :key="idx">
            <b-button v-b-toggle="'collapse-'+idx" class="rounded-0 border-0 m-1 text-left" block>
                <i class="fa fa-arrow-alt-circle-down"></i> {{log.time|toDate}}
            </b-button>

            <!-- Element to collapse -->
            <b-collapse :id="'collapse-'+idx">
                <b-card>
                    <vue-json-pretty :path="'res'" :data="log.data"/>
                </b-card>
            </b-collapse>
        </div>
    </b-modal>
</template>

<script>
    const moment = require('moment');
    export default {
        name: "Log",
        data() {
            return {
                logs: []
            }
        },
        filters: {
            toDate(date) {
                return moment(new Date(date)).format('DD/MM/YYYY HH:mm:ss')
            }
        },
        methods: {
            getLogs() {
                this.logs = JSON.parse(localStorage.getItem('log_request')) ?? [];
            },
            clearLog() {
                localStorage.removeItem('log_request');
                this.logs = [];
            }
        }
    }
</script>