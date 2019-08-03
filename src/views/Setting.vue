<template>
<div class="container setting-container">
    <h1 class="title">You can set your theme here. </h1>
    <ul class="option-list">
        <li class="option-item">
            <label class="label">Theme color : </label>
            <el-color-picker v-model="themeColor" />
        </li>
        <li class="option-item">
            <label class="label">Font color : </label>
            <el-color-picker v-model="fontColor" />
        </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Setting',
    data() {
        return {
            themeColor: '#FFFFFF',
            fontColor: '#000000',
        };
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
@import "@/assets/scss/common.scss";

.setting-container {
    padding: 20px;

    .title {
        padding: 10px 0 30px;
        font-size: 25px;
        border-bottom: 1px solid $border-color-base;
    }

    .option-list {
        .option-item {
            @extend .flex-vertical-middle;
            padding: 10px 0;

            .label {
                flex: 1;
            }
        }
    }
}
</style>
