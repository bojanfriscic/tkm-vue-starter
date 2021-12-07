<template>
    <div class="layout-dashboard">
        <QLayout
            :userRole="$t(userRole)"
            :companyName="companyName"
            :user="userDetails"
            :lang="language"
            @changeLang="changeLang"
            @changeLangErr="changeLang"
            :nav_items="menuItems"
            :loading="loading"
        >
            <div class="content">Hello user {{ userDetails.id }}</div>
        </QLayout>
    </div>
</template>

<script src="./Layout.js"></script>
<style lang="scss" src="./Layout.scss" scoped></style>
