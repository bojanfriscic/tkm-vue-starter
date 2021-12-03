<template>
  <div id="app">
    <!--
    <q-layout
      :userRole="$t(userRole)"
      :companyName="companyName"
      :user="userDetails"
      :lang="language"
      @changeLang="changeLang"
      @changeLangErr="changeLang"
      :nav_items="menuItems"
      :loading="loading"
    >
      <div class="content">
        <router-view />
      </div>
    </q-layout>
    -->
    QIWA
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import { store } from './core/store';
// import { STORE } from './core/types/store';

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState({
      loading: state => state.loading,
      session: state => state.session,
      language: state => state.i18n.language,
      menuItems: state => state.navigation.items,
      companyName: state => state.company.details.name,
      user: state => state.user,
    }),
    ...mapGetters({
      userName: "getFullName",
    }),
  },
  /* created() {
    store.dispatch(STORE.USER.ACTION.GET, { userId: "97834"})
  } */
}
</script>„

<style>
</style>
