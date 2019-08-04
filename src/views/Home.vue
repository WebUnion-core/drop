<template>
    <div class="container home-container">
        <h1 class="title">Thanks for using Blue-drop. </h1>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Home',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
@import "@/assets/scss/common.scss";

.home-container {
    @extend .flex-complete-middle;

    .title {
        text-align: center;
        font-size: 25px;
    }
}
</style>
