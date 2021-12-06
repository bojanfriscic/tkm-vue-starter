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
            title: "Takamol Vue starter",
            // title: this.$t("CORE.PAGE_TITLE"),
            htmlAttrs: {
                lang: this.language,
                dir: this.language === "ar" ? "rtl" : "ltr",
            },
        };
    },
    computed: mapState({
        language: "en",
        // language: state => state.i18n.language,
    }),
}
</script>

<style lang="scss">
    html {
        font-size: 100%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
        height: 100%;

        [dir="rtl"] & {
            direction: rtl;
        }
    }
</style>
