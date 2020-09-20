<template>
    <main>
        <div id="wrapper">

            <Sidebar></Sidebar>

            <div id="content-wrapper" class="d-flex flex-column">

                <div id="content">

                    <Header></Header>

                    <router-view></router-view>

                </div>

                <Footer></Footer>

            </div>

        </div>

        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    </main>
</template>

<script>
    import Sidebar from './layouts/Sidebar.vue';
    import Header from './layouts/Header.vue';
    import Footer from './layouts/Footer.vue';

    export default {
        name: "Admin",
        components: {Footer, Header, Sidebar}
    }
</script>

<style scoped>

</style>
