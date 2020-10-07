<template>
    <div>
        <the-header/>
        <index/>
    </div>
</template>

<script>
    import Index from './views/Home/Index';
    import TheHeader from "./views/TheHeader";

    export default {
        name: 'App',
        components: {TheHeader, Index}
    }
</script>
