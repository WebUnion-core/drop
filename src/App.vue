<template>
<div id="app">
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
    methods: {
        handleSelect(index) {
            this.activeIndex = index;
            this.$router.replace(this.menus[parseInt(index, 10)].path);
        },
    },
}
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
