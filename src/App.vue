<script setup lang='ts'>
import Layout from '@/layout/Layout.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';

</script>

<template>
    <Layout>
        <Navbar active="home" />
        <main>
            <UnderConstruction />
        </main>
        <Footer />
    </Layout>
</template>