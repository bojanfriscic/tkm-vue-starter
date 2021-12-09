<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapState } from "vuex";

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
    computed: mapState({
        language: state => state.i18n.language,
    }),
}
</script>
