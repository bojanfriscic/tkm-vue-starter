<template>
    <div id="app">
        <Layout>
            <router-view />
        </Layout>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Layout } from '@hoc/Layout';

export default {
    name: 'App',
    metaInfo() {
        return {
            title: this.$t("CORE.PAGE_TITLE"),
            htmlAttrs: {
                lang: this.language,
                dir: this.language === "ar" ? "rtl" : "ltr",
            },
        };
    },
    components: {
        Layout
    },
    computed: mapState({
        language: state => state.i18n.language,
    }),
}
</script>
