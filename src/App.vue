<template>
    <div
        id="app"
        :style="{
            backgroundColor: themeColor,
            color: fontColor,
        }"
    >
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="0">Home</el-menu-item>
            <el-menu-item index="1">Setting</el-menu-item>
        </el-menu>

        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            activeIndex: '0',
            menus: [
                {
                    path: '/',
                },
                {
                    path: '/setting',
                },
            ],
        };
    },
    computed: {
        ...mapState([
            'themeColor',
            'fontColor',
        ]),
    },
    methods: {
        handleSelect(index) {
            this.activeIndex = index;
            this.$router.replace(this.menus[parseInt(index, 10)].path);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
@import "@/assets/scss/common.scss";

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import "@/assets/scss/common.scss";

#app {
    .el-menu {
        background-color: inherit;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
        color: inherit;
        border-color: inherit;
    }
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
        color: inherit;
        background-color: inherit;
    }
}
</style>
