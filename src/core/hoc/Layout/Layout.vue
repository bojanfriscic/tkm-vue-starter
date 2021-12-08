<template>
    <div class="c-dashboard-layout">
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
            <div class="content" v-if="isMock">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Training ID</th>
                            <th>Training Name</th>
                            <th>Training institute</th>
                            <th>Created at</th>
                            <th>Training Start Date</th>
                            <th>Training End Date</th>
                            <th>Request status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in dashboardService" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.TrainingID }}</td>
                            <td>{{ item.TrainingName }}</td>
                            <td>{{ item.TrainingInstitute }}</td>
                            <td>{{ dateFormating(item.CreatedAt) }}</td>
                            <td>{{ dateFormating(item.TrainingStartDate) }}</td>
                            <td>{{ dateFormating(item.TrainingStartDate) }}</td>
                            <td>{{ item.RequestStatus }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="content" v-else>Hello user {{ userDetails.id }}</div>
        </QLayout>
    </div>
</template>

<script src="./Layout.js"></script>
<style lang="scss" src="./Layout.scss" scoped></style>
