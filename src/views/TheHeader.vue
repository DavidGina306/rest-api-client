<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Api Test | Produtos</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" v-b-modal.modal_logs><i class="fa fa-list"></i> Logs</b-nav-item>
                    <b-nav-item href="#" v-b-modal.modal_about><i class="fa fa-info-circle"></i> Sobre</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <about-modal/>
        <log/>
    </div>
</template>

<script>
    import AboutModal from "./AboutModal";
    import Log from "./Log";

    export default {
        name: "TheHeader",
        components: {Log, AboutModal}
    }
</script>